import { useEffect, useState } from 'react';
import { Link, Stack, useRouter } from 'expo-router';
import { View, Text, Pressable, ScrollView, Switch } from 'react-native';
import { useTheme } from '~/components/theme-provider';
import { api } from '~/lib/api-client';

const BADGES = [
  { id: 'b1', emoji: '🌙', name: '月相新人', unlocked: true },
  { id: 'b2', emoji: '🌌', name: '银河熟知', unlocked: true },
  { id: 'b3', emoji: '☄️', name: '彗星眼', unlocked: true },
  { id: 'b4', emoji: '🔭', name: '巡天者', unlocked: true },
  { id: 'b5', emoji: '🪐', name: '行星导师', unlocked: false },
  { id: 'b6', emoji: '🌑', name: '暗影猎手', unlocked: false },
  { id: 'b7', emoji: '🌠', name: '流星雨夜', unlocked: false },
  { id: 'b8', emoji: '🛰️', name: '深空通讯', unlocked: false },
];

export default function Account() {
  const { theme, setTheme } = useTheme();
  const isNight = theme === 'night';
  const router = useRouter();
  const [me, setMe] = useState<{ id: string; name: string } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    void api.auth.me().then((r) => setMe(r.user));
  }, []);

  async function loginLite() {
    router.push('/login');
  }

  async function signOut() {
    setBusy(true);
    try {
      await api.auth.logout();
      setMe(null);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        style={{ flex: 1, backgroundColor: isNight ? '#0a0717' : '#fff7e6' }}
        contentContainerStyle={{ padding: 20, gap: 14 }}
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
            我的账户
          </Text>
          <View className="w-6" />
        </View>

        <View className={`rounded-2xl p-5 flex-row items-center gap-4 ${isNight ? 'bg-night-900' : 'bg-white'}`}>
          <View className="w-16 h-16 rounded-full bg-night-500 items-center justify-center">
            <Text className="text-3xl">🧑‍🚀</Text>
          </View>
          <View className="flex-1">
            <Text className={`text-lg font-bold ${isNight ? 'text-cream' : 'text-night-900'}`}>
              {me ? me.name : '未登录'}
            </Text>
            <Text className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}>
              {me ? 'lite auth · 已会话' : '匿名使用 / 仅本地'}
            </Text>
          </View>
        </View>

        {!me && (
          <Pressable onPress={loginLite} className="rounded-2xl p-4 items-center bg-night-500">
            <Text className="text-cream font-extrabold text-base" style={{ fontWeight: 800 }}>
              登录 / Star in ✨
            </Text>
          </Pressable>
        )}

        {me && (
          <Pressable
            onPress={signOut}
            disabled={busy}
            className={`rounded-2xl p-4 items-center ${busy ? 'bg-night-700' : 'bg-rose'}`}
          >
            <Text className="text-night-900 font-extrabold text-base" style={{ fontWeight: 800 }}>
              登出
            </Text>
          </Pressable>
        )}

        <Link href="/groups" asChild>
          <Pressable className={`rounded-2xl p-4 items-center ${isNight ? 'bg-night-900' : 'bg-white'}`}>
            <Text className={`text-base font-bold ${isNight ? 'text-cream' : 'text-night-900'}`}>
              👥 我的群组
            </Text>
          </Pressable>
        </Link>

        <Link href="/leaderboard" asChild>
          <Pressable className={`rounded-2xl p-4 items-center ${isNight ? 'bg-night-900' : 'bg-white'}`}>
            <Text className={`text-base font-bold ${isNight ? 'text-cream' : 'text-night-900'}`}>
              🏆 查看排行榜
            </Text>
          </Pressable>
        </Link>

        <View className="flex-row gap-3">
          <View className={`flex-1 rounded-2xl p-4 ${isNight ? 'bg-night-900' : 'bg-white'}`}>
            <Text className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}>
              完成关卡
            </Text>
            <Text className={`text-2xl font-extrabold ${isNight ? 'text-cream' : 'text-night-900'}`}
              style={{ fontWeight: 800 }}>
              32
            </Text>
          </View>
          <View className={`flex-1 rounded-2xl p-4 ${isNight ? 'bg-night-900' : 'bg-white'}`}>
            <Text className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}>
              完美通关
            </Text>
            <Text className={`text-2xl font-extrabold ${isNight ? 'text-cream' : 'text-night-900'}`}
              style={{ fontWeight: 800 }}>
              18
            </Text>
          </View>
        </View>

        <View className={`rounded-2xl p-4 gap-3 ${isNight ? 'bg-night-900' : 'bg-white'}`}>
          <View className="flex-row items-center justify-between">
            <Text className={`text-base ${isNight ? 'text-cream' : 'text-night-900'}`}>夜观模式</Text>
            <Switch value={isNight} onValueChange={(v) => setTheme(v ? 'night' : 'day')} />
          </View>
        </View>

        <Text className={`mt-4 text-base font-bold ${isNight ? 'text-cream' : 'text-night-900'}`}>
          徽章
        </Text>
        <View className="flex-row flex-wrap gap-3">
          {BADGES.map((b) => (
            <View
              key={b.id}
              className={`w-[23%] items-center p-2 rounded-2xl ${
                b.unlocked
                  ? isNight
                    ? 'bg-night-900'
                    : 'bg-white'
                  : 'opacity-30 bg-night-900'
              }`}
            >
              <Text className="text-3xl">{b.emoji}</Text>
              <Text
                className={`mt-1 text-xs text-center ${
                  isNight ? 'text-night-200' : 'text-night-700'
                }`}
              >
                {b.name}
              </Text>
            </View>
          ))}
        </View>

        <View className="h-12" />
      </ScrollView>
    </>
  );
}
