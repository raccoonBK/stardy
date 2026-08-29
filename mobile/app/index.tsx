import { Link } from 'expo-router';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useTheme } from '~/components/theme-provider';
import { TRACKS, LEADERBOARD } from '~/lib/astro/content';
import { pickLocale } from '~/lib/astro/types';

export default function Home() {
  const { theme } = useTheme();
  const isNight = theme === 'night';
  const locale = 'zh';

  const me = LEADERBOARD.find((e) => e.isMe);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: isNight ? '#0a0717' : '#fff7e6' }}
      contentContainerStyle={{ padding: 24, gap: 16, paddingBottom: 80 }}
    >
      <View className="items-center gap-2 pt-8">
        <Text className="text-6xl">🪐</Text>
        <Text
          className={`text-3xl font-extrabold ${isNight ? 'text-cream' : 'text-night-900'}`}
          style={{ fontWeight: 800 }}
        >
          Stardy · 星旅
        </Text>
        <Text className={`text-base ${isNight ? 'text-night-200' : 'text-night-700'}`}>
          每天 5 分钟，认识一片天
        </Text>
      </View>

      {me && (
        <Link href="/leaderboard" asChild>
          <Pressable
            className={`mt-4 rounded-2xl p-4 flex-row items-center justify-between ${
              isNight ? 'bg-night-900' : 'bg-white'
            }`}
            style={{ elevation: 4 }}
          >
            <View>
              <Text className={`font-bold ${isNight ? 'text-cream' : 'text-night-900'}`}>
                白银联赛 · 第 3 赛季
              </Text>
              <Text className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}>
                你在 #{me.rank} · {me.xp.toLocaleString()} XP
              </Text>
            </View>
            <Text className="text-2xl">🏆</Text>
          </Pressable>
        </Link>
      )}

      <Text className={`mt-6 text-xl font-bold ${isNight ? 'text-cream' : 'text-night-900'}`}>
        选择你的轨道
      </Text>

      <View className="gap-4">
        {TRACKS.map((track) => {
          const trackName = pickLocale(track.name, locale);
          const tagline = pickLocale(track.tagline, locale);
          return (
            <View
              key={track.id}
              className={`rounded-3xl p-5 gap-3 ${
                isNight ? 'bg-night-900' : 'bg-white'
              }`}
            >
              <View className="flex-row items-center gap-3">
                <Text className="text-4xl">{track.icon}</Text>
                <View className="flex-1">
                  <Text
                    className={`text-lg font-bold ${isNight ? 'text-cream' : 'text-night-900'}`}
                  >
                    {trackName}
                  </Text>
                  <Text
                    className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}
                  >
                    {tagline}
                  </Text>
                </View>
                <Text className={`text-xs ${isNight ? 'text-night-200' : 'text-night-700'}`}>
                  {track.nodes.length} 关
                </Text>
              </View>

              <View className="flex-row flex-wrap gap-2">
                {track.nodes.slice(0, 8).map((node) => {
                  const t = pickLocale(node.lesson.title, locale);
                  return (
                    <Link
                      key={node.lesson.id}
                      href={{ pathname: '/lesson/[id]', params: { id: node.lesson.id } }}
                      asChild
                    >
                      <Pressable
                        className={`rounded-full px-3 py-1.5 ${
                          isNight ? 'bg-night-700' : 'bg-night-200'
                        }`}
                      >
                        <Text
                          className={`text-xs ${
                            isNight ? 'text-cream' : 'text-night-900'
                          }`}
                        >
                          {node.lesson.icon} {t}
                        </Text>
                      </Pressable>
                    </Link>
                  );
                })}
                {track.nodes.length > 8 && (
                  <Text className={`text-xs ${isNight ? 'text-night-200' : 'text-night-700'} px-3 py-1.5`}>
                    …+{track.nodes.length - 8} 关
                  </Text>
                )}
              </View>
            </View>
          );
        })}
      </View>

      <Link href="/account" asChild>
        <Pressable className="mt-6 items-center">
          <Text className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}>
            👤 我的账户
          </Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}
