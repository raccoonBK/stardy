import { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useTheme } from '~/components/theme-provider';
import { pickLocale, type TeachCard } from '~/lib/astro/types';

export type TeachMark = 'understood' | 'not_understood';

export interface TeachSwipeVerdict {
  /** 1-based index of the teach card. */
  index: number;
  mark: TeachMark | 'see_again';
}

interface TeachSwipeProps {
  lessonId: string;
  cards: TeachCard[];
  onComplete: (verdicts: TeachSwipeVerdict[]) => void;
}

export function TeachSwipe({ lessonId: _lessonId, cards, onComplete }: TeachSwipeProps) {
  const { theme } = useTheme();
  const isNight = theme === 'night';
  const [locale] = useState<'zh' | 'en'>('zh'); // could read from settings
  const [deck, setDeck] = useState<number[]>(cards.map((_, i) => i));
  const [verdicts, setVerdicts] = useState<TeachSwipeVerdict[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  const total = cards.length;
  const decided = verdicts.length;
  const progressPct = Math.round((decided / total) * 100);

  function decide(mark: TeachMark) {
    const idx = deck[0];
    const v: TeachSwipeVerdict = { index: idx + 1, mark };
    const next = [...verdicts, v];
    setVerdicts(next);

    const remaining = deck.slice(1);
    setDeck(remaining);
    setActiveIdx((i) => i + 1);

    if (remaining.length === 0) {
      onComplete(next);
    }
  }

  function seeAgain() {
    if (deck.length <= 1) {
      // only one left, can't push to end — just mark understood
      decide('understood');
      return;
    }
    const idx = deck[0];
    const v: TeachSwipeVerdict = { index: idx + 1, mark: 'see_again' };
    const next = [...verdicts, v];
    setVerdicts(next);

    const remaining = [...deck.slice(1), deck[0]];
    setDeck(remaining);
  }

  if (deck.length === 0) return null;

  const cardIdx = deck[0];
  const card = cards[cardIdx];
  const title = pickLocale(card.title, locale);
  const body = pickLocale(card.body, locale);

  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{ padding: 24, gap: 16, paddingBottom: 200 }}
    >
      <View className="flex-row items-center gap-2 pt-8">
        <View className={`h-2 flex-1 rounded-full overflow-hidden ${isNight ? 'bg-night-900' : 'bg-night-200'}`}>
          <View
            className={`h-full ${isNight ? 'bg-night-500' : 'bg-night-700'}`}
            style={{ width: `${progressPct}%` }}
          />
        </View>
        <Text className={`text-xs ${isNight ? 'text-night-200' : 'text-night-700'}`}>
          {decided}/{total}
        </Text>
      </View>

      <Text
        className={`text-xs text-center mt-2 ${isNight ? 'text-night-200' : 'text-night-700'}`}
      >
        swipe 一张 learn card · 答对答错先表态
      </Text>

      <View
        className={`rounded-3xl p-6 gap-4 mt-2 ${
          isNight ? 'bg-night-900' : 'bg-white'
        }`}
        style={{ minHeight: 320, elevation: 6 }}
      >
        <Text className="text-7xl text-center">{card.visual}</Text>
        <Text
          className={`text-2xl font-extrabold text-center ${isNight ? 'text-cream' : 'text-night-900'}`}
          style={{ fontWeight: 800 }}
        >
          {title}
        </Text>
        <Text
          className={`text-base leading-6 text-center ${isNight ? 'text-night-200' : 'text-night-700'}`}
        >
          {body}
        </Text>
      </View>

      <View className="flex-row justify-center gap-3 mt-4">
        <Pressable
          onPress={() => decide('not_understood')}
          className={`rounded-2xl px-5 py-3 items-center bg-rose`}
          style={{ minWidth: 96 }}
        >
          <Text className="text-night-900 font-extrabold text-sm" style={{ fontWeight: 800 }}>
            ← 没懂
          </Text>
        </Pressable>
        <Pressable
          onPress={seeAgain}
          className={`rounded-2xl px-5 py-3 items-center ${
            isNight ? 'bg-night-700' : 'bg-night-200'
          }`}
        >
          <Text
            className={`font-extrabold text-sm ${isNight ? 'text-cream' : 'text-night-900'}`}
            style={{ fontWeight: 800 }}
          >
            ↺ 再看
          </Text>
        </Pressable>
        <Pressable
          onPress={() => decide('understood')}
          className={`rounded-2xl px-5 py-3 items-center bg-mint`}
          style={{ minWidth: 96 }}
        >
          <Text className="text-night-900 font-extrabold text-sm" style={{ fontWeight: 800 }}>
            懂了 →
          </Text>
        </Pressable>
      </View>

      <Text
        className={`text-center text-xs mt-2 ${isNight ? 'text-night-200' : 'text-night-700'}`}
      >
        已经看过 {verdicts.length} / {total} 张
      </Text>
    </ScrollView>
  );
}
