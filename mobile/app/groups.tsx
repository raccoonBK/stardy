import { useEffect, useState } from 'react';
import { Link, Stack } from 'expo-router';
import { View, Text, Pressable, ScrollView, TextInput, RefreshControl, ActivityIndicator } from 'react-native';
import { useTheme } from '~/components/theme-provider';
import { api } from '~/lib/api-client';

type Group = { id: string; name: string; invite_code: string; member_count: number; my_role: string };

export default function GroupsPage() {
  const { theme } = useTheme();
  const isNight = theme === 'night';
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [joining, setJoining] = useState(false);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [err, setErr] = useState<string | null>(null);

  async function refresh() {
    setLoading(true);
    try {
      const r = await api.groups.list();
      setGroups(r.groups);
    } catch {
      // not signed in → empty
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void refresh(); }, []);

  async function create() {
    if (!name.trim()) return;
    setCreating(true);
    setErr(null);
    try {
      await api.groups.create(name.trim());
      setName('');
      await refresh();
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : '建群失败');
    } finally {
      setCreating(false);
    }
  }

  async function join() {
    if (!code.trim()) return;
    setJoining(true);
    setErr(null);
    try {
      await api.groups.join(code.trim().toUpperCase());
      setCode('');
      await refresh();
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : '加群失败');
    } finally {
      setJoining(false);
    }
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        style={{ flex: 1, backgroundColor: isNight ? '#0a0717' : '#fff7e6' }}
        contentContainerStyle={{ padding: 20, gap: 12, paddingBottom: 80 }}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={refresh} tintColor="#7c6df0" />}
      >
        <View className="flex-row items-center pt-6">
          <Link href="/" asChild>
            <Pressable>
              <Text className={`text-2xl ${isNight ? 'text-cream' : 'text-night-900'}`}>‹</Text>
            </Pressable>
          </Link>
          <Text
            className={`flex-1 text-center text-lg font-extrabold ${isNight ? 'text-cream' : 'text-night-900'}`}
            style={{ fontWeight: 800 }}
          >
            👥 群组 · 星友会
          </Text>
          <View className="w-6" />
        </View>

        {/* 创建群组 */}
        <View className={`rounded-2xl p-4 gap-3 ${isNight ? 'bg-night-900' : 'bg-white'}`}>
          <Text className={`font-bold ${isNight ? 'text-cream' : 'text-night-900'}`}>
            开个新群
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="群名（如：月相组 / 流星雨观测）"
            placeholderTextColor={isNight ? '#5a4e88' : '#9b8fd6'}
            className={`rounded-xl p-3 ${isNight ? 'bg-night-950 text-cream' : 'bg-night-50 text-night-900'}`}
            maxLength={32}
          />
          <Pressable
            onPress={create}
            disabled={creating}
            className={`rounded-xl p-3 items-center ${creating ? 'bg-night-700' : 'bg-night-500'}`}
          >
            {creating ? <ActivityIndicator color="#fff7e6" /> : (
              <Text className="text-cream font-extrabold text-sm" style={{ fontWeight: 800 }}>
                建群
              </Text>
            )}
          </Pressable>
        </View>

        {/* 加入群组 */}
        <View className={`rounded-2xl p-4 gap-3 ${isNight ? 'bg-night-900' : 'bg-white'}`}>
          <Text className={`font-bold ${isNight ? 'text-cream' : 'text-night-900'}`}>
            用邀请码加群
          </Text>
          <TextInput
            value={code}
            onChangeText={(t) => setCode(t.toUpperCase())}
            placeholder="8 位邀请码"
            placeholderTextColor={isNight ? '#5a4e88' : '#9b8fd6'}
            autoCapitalize="characters"
            maxLength={8}
            className={`rounded-xl p-3 text-center text-lg tracking-widest ${
              isNight ? 'bg-night-950 text-cream' : 'bg-night-50 text-night-900'
            }`}
          />
          <Pressable
            onPress={join}
            disabled={joining}
            className={`rounded-xl p-3 items-center ${joining ? 'bg-night-700' : 'bg-mint'}`}
          >
            {joining ? <ActivityIndicator color="#0a0717" /> : (
              <Text className="text-night-900 font-extrabold text-sm" style={{ fontWeight: 800 }}>
                加群
              </Text>
            )}
          </Pressable>
        </View>

        {err && <Text className="text-rose text-sm text-center">{err}</Text>}

        {/* 我的群组 */}
        <Text className={`mt-4 text-base font-bold ${isNight ? 'text-cream' : 'text-night-900'}`}>
          我的群组
        </Text>

        {groups.length === 0 && !loading && (
          <View className={`rounded-2xl p-6 items-center gap-2 ${isNight ? 'bg-night-900' : 'bg-white'}`}>
            <Text className="text-4xl">🌌</Text>
            <Text className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}>
              你还没加群。上面建一个，或者好友发你邀请码。
            </Text>
          </View>
        )}

        {groups.map((g) => (
          <Link key={g.id} href={`/groups/${g.id}`} asChild>
            <Pressable
              className={`rounded-2xl p-4 flex-row items-center justify-between ${
                isNight ? 'bg-night-900' : 'bg-white'
              }`}
            >
              <View className="flex-1">
                <Text className={`text-base font-bold ${isNight ? 'text-cream' : 'text-night-900'}`}>
                  {g.name}
                </Text>
                <Text className={`text-xs ${isNight ? 'text-night-200' : 'text-night-700'}`}>
                  {g.member_count} 人 · {g.my_role === 'owner' ? '👑 群主' : '成员'}
                  {' · '}
                  邀请 {g.invite_code}
                </Text>
              </View>
              <Text className={`text-xl ${isNight ? 'text-night-200' : 'text-night-700'}`}>›</Text>
            </Pressable>
          </Link>
        ))}

        <View className="h-12" />
      </ScrollView>
    </>
  );
}
