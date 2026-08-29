"use client";

import { use, useMemo } from 'react';
import { View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';
import { LessonRunner } from '~/components/astro/lesson-runner';
import { ALL_LESSONS, findLesson } from '~/lib/astro/content';
import { useTheme } from '~/components/theme-provider';

export default function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { theme } = useTheme();
  const isNight = theme === 'night';
  const lesson = useMemo(() => findLesson(id), [id]);

  if (!lesson) {
    const ids = ALL_LESSONS.map((l) => l.id).join(', ');
    return (
      <View
        className="flex-1 items-center justify-center p-6 gap-3"
        style={{ backgroundColor: isNight ? '#0a0717' : '#fff7e6' }}
      >
        <Stack.Screen options={{ headerShown: false }} />
        <Text className="text-5xl">🛰️</Text>
        <Text
          className={`text-xl font-extrabold ${isNight ? 'text-cream' : 'text-night-900'}`}
          style={{ fontWeight: 800 }}
        >
          找不到关卡 "{id}"
        </Text>
        <Text className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}>
          可选：{ids.split(',').slice(0, 4).join(', ')}…
        </Text>
        <Link href="/" className={`mt-2 px-5 py-3 rounded-full ${isNight ? 'bg-night-500' : 'bg-night-700'}`}>
          <Text className="text-cream font-extrabold text-sm" style={{ fontWeight: 800 }}>
            回星图
          </Text>
        </Link>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <LessonRunner lesson={lesson} locale="zh" />
    </>
  );
}
