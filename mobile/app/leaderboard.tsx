import { Link, Stack } from 'expo-router';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useTheme } from '~/components/theme-provider';
import { LEADERBOARD } from '~/lib/astro/content';
import { pickLocale } from '~/lib/astro/types';

export default function Leaderboard() {
  const { theme } = useTheme();
  const isNight = theme === 'night';
  const locale = 'zh';
  const me = LEADERBOARD.find((e) => e.isMe)!;
  const above = LEADERBOARD.find((e) => e.rank === me.rank - 1);
  const gap = above ? above.xp - me.xp : 0;
  const tierColor = { gold: '#f4b942', silver: '#c0c0c0', bronze: '#cd7f32' };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        style={{ flex: 1, backgroundColor: isNight ? '#0a0717' : '#fff7e6' }}
        contentContainerStyle={{ padding: 20, gap: 12 }}
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
            🏆 白银联赛 · 第 3 赛季
          </Text>
          <View className="w-6" />
        </View>

        <View
          className={`rounded-2xl p-5 items-center gap-2 ${isNight ? 'bg-night-900' : 'bg-white'}`}
        >
          <Text className="text-amber text-base">你本周的位置</Text>
          <Text
            className={`text-5xl font-extrabold ${isNight ? 'text-cream' : 'text-night-900'}`}
            style={{ fontWeight: 800 }}
          >
            #{me.rank}
          </Text>
          <Text className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}>
            还差 {gap} XP 就能超过上一名
          </Text>
          <Link href="/groups" asChild>
            <Pressable className="mt-2 rounded-full px-5 py-2 bg-night-500">
              <Text className="text-cream font-extrabold text-sm" style={{ fontWeight: 800 }}>
                挑战群组
              </Text>
            </Pressable>
          </Link>
        </View>

        <Text className={`mt-4 text-base font-bold ${isNight ? 'text-cream' : 'text-night-900'}`}>
          排行榜 · Top 50
        </Text>

        <View
          className={`rounded-2xl overflow-hidden ${isNight ? 'bg-night-900' : 'bg-white'}`}
        >
          {LEADERBOARD.map((e, i) => (
            <View
              key={e.rank}
              className={`flex-row items-center px-4 py-3 ${
                e.isMe
                  ? isNight
                    ? 'bg-night-700'
                    : 'bg-amber'
                  : ''
              }`}
              style={
                i > 0
                  ? { borderTopWidth: 1, borderTopColor: isNight ? '#1a1530' : '#f0e8d0' }
                  : undefined
              }
            >
              <Text
                className={`w-10 text-base font-extrabold ${
                  isNight ? 'text-night-200' : 'text-night-700'
                }`}
                style={{ fontWeight: 800 }}
              >
                {e.rank <= 3 ? ['🥇', '🥈', '🥉'][e.rank - 1] : `#${e.rank}`}
              </Text>
              <Text className="text-2xl mr-2">{e.avatar}</Text>
              <Text
                className={`flex-1 text-base ${
                  e.isMe ? 'text-amber' : isNight ? 'text-cream' : 'text-night-900'
                }`}
              >
                {pickLocale(e.name, locale)}
              </Text>
              <View
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: tierColor[e.tier] }}
              />
              <Text
                className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}
              >
                {e.xp.toLocaleString()} XP
              </Text>
            </View>
          ))}
        </View>

        <View className="h-12" />
      </ScrollView>
    </>
  );
}
