import { useEffect, useState } from 'react';
import { useLocalSearchParams, Link, Stack } from 'expo-router';
import { View, Text, Pressable, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import { useTheme } from '~/components/theme-provider';
import { api } from '~/lib/api-client';

type Member = { rank: number; id: string; name: string; role: string; xp: number; tier: string };

export default function GroupDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();
  const isNight = theme === 'night';
  const [loading, setLoading] = useState(true);
  const [group, setGroup] = useState<{ name: string; invite_code: string } | null>(null);
  const [members, setMembers] = useState<Member[]>([]);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setErr(null);
    try {
      const r = await api.groups.detail(id);
      setGroup({ name: r.group.name, invite_code: r.group.invite_code });
      setMembers(r.members);
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : '拉取失败');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { if (id) void load(); }, [id]);

  const tierColor = { gold: '#f4b942', silver: '#c0c0c0', bronze: '#cd7f32' };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        style={{ flex: 1, backgroundColor: isNight ? '#0a0717' : '#fff7e6' }}
        contentContainerStyle={{ padding: 20, gap: 12, paddingBottom: 80 }}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor="#7c6df0" />}
      >
        <View className="flex-row items-center pt-6">
          <Link href="/groups" asChild>
            <Pressable>
              <Text className={`text-2xl ${isNight ? 'text-cream' : 'text-night-900'}`}>‹</Text>
            </Pressable>
          </Link>
          <Text
            className={`flex-1 text-center text-lg font-extrabold ${isNight ? 'text-cream' : 'text-night-900'}`}
            style={{ fontWeight: 800 }}
          >
            {group?.name ?? '加载中…'}
          </Text>
          <View className="w-6" />
        </View>

        {err && (
          <View className={`rounded-2xl p-4 items-center gap-2 ${isNight ? 'bg-night-900' : 'bg-white'}`}>
            <Text className="text-rose text-sm">{err}</Text>
            <Pressable onPress={load} className="rounded-full px-4 py-2 bg-night-500">
              <Text className="text-cream text-xs font-extrabold" style={{ fontWeight: 800 }}>重试</Text>
            </Pressable>
          </View>
        )}

        {group && (
          <View className={`rounded-2xl p-4 items-center gap-1 ${isNight ? 'bg-night-900' : 'bg-white'}`}>
            <Text className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}>
              邀请码（分享给好友）
            </Text>
            <Text
              className={`text-3xl font-extrabold tracking-widest ${isNight ? 'text-amber' : 'text-night-700'}`}
              style={{ fontWeight: 800 }}
            >
              {group.invite_code}
            </Text>
          </View>
        )}

        <Text className={`mt-4 text-base font-bold ${isNight ? 'text-cream' : 'text-night-900'}`}>
          群内排行榜
        </Text>

        {loading ? (
          <View className="items-center p-6">
            <ActivityIndicator color="#7c6df0" />
          </View>
        ) : (
          <View className={`rounded-2xl overflow-hidden ${isNight ? 'bg-night-900' : 'bg-white'}`}>
            {members.map((m, i) => (
              <View
                key={m.id}
                className="flex-row items-center px-4 py-3"
                style={
                  i > 0
                    ? { borderTopWidth: 1, borderTopColor: isNight ? '#1a1530' : '#f0e8d0' }
                    : undefined
                }
              >
                <Text className={`w-10 text-base font-extrabold ${isNight ? 'text-night-200' : 'text-night-700'}`}
                  style={{ fontWeight: 800 }}>
                  {m.rank <= 3 ? ['🥇', '🥈', '🥉'][m.rank - 1] : `#${m.rank}`}
                </Text>
                <Text className="flex-1 text-base" style={{ color: isNight ? '#fff7e6' : '#14102b' }}>
                  {m.name}
                  {m.role === 'owner' ? '  👑' : ''}
                </Text>
                <View
                  className="w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor: tierColor[m.tier as keyof typeof tierColor] ?? '#999' }}
                />
                <Text className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}>
                  {m.xp.toLocaleString()} XP
                </Text>
              </View>
            ))}
          </View>
        )}

        <View className="h-12" />
      </ScrollView>
    </>
  );
}
