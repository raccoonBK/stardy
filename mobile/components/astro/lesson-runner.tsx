import { useMemo, useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { QuizCard } from './quiz-card';
import { FeedbackSheet } from './feedback-sheet';
import { TeachSwipe, type TeachSwipeVerdict } from './teach-swipe';
import { useTheme } from '~/components/theme-provider';
import { pickLocale, type Lesson, type Question } from '~/lib/astro/types';

type Phase = 'teach_swipe' | 'quiz' | 'review_teach';

interface LessonRunnerProps {
  lesson: Lesson;
  locale?: string;
}

export function LessonRunner({ lesson, locale = 'zh' }: LessonRunnerProps) {
  const router = useRouter();
  const { theme } = useTheme();
  const isNight = theme === 'night';

  const [phase, setPhase] = useState<Phase>('teach_swipe');
  const [step, setStep] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [combo, setCombo] = useState(0);
  const [finished, setFinished] = useState(false);
  const [reviewingTeachIdx, setReviewingTeachIdx] = useState<number | null>(null);
  const [notUnderstood, setNotUnderstood] = useState<number[]>([]);

  const total = lesson.questions.length;
  const q = lesson.questions[step];

  // Map question.based_on (e.g. "teach[2]") → 0-based teach index.
  function teachIdxFromBasedOn(q: Question): number | null {
    const raw = (q as Question & { based_on?: string }).based_on;
    if (!raw) return null;
    const m = /^teach\[(\d+)\]$/.exec(raw);
    if (!m) return null;
    return parseInt(m[1], 10) - 1;
  }

  function handleTeachSwipeDone(verdicts: TeachSwipeVerdict[]) {
    const nu = verdicts
      .filter((v) => v.mark === 'not_understood' || v.mark === 'see_again')
      .map((v) => v.index - 1);
    setNotUnderstood(nu);
    void verdicts;
    setPhase('quiz');
  }

  function handleAnswer(id: string) {
    if (selectedId !== null) return; // already answered
    setSelectedId(id);
    const correct = id === q.correctId;
    setLastCorrect(correct);
    if (correct) {
      setCorrectCount((c) => c + 1);
      setCombo((c) => c + 1);
    } else {
      setCombo(0);
    }
    setFeedbackOpen(true);
  }

  function handleContinue() {
    setFeedbackOpen(false);
    if (step + 1 < total) {
      setStep((s) => s + 1);
      setSelectedId(null);
      setLastCorrect(null);
    } else {
      setFinished(true);
    }
  }

  function startReview() {
    const idx = teachIdxFromBasedOn(q);
    if (idx === null || idx < 0 || idx >= lesson.teach.length) {
      handleContinue();
      return;
    }
    setReviewingTeachIdx(idx);
    setPhase('review_teach');
  }

  function finishReview() {
    setReviewingTeachIdx(null);
    setPhase('quiz');
    setLastCorrect(null);
  }

  const stars = useMemo(() => {
    const ratio = correctCount / total;
    if (ratio >= 0.99) return 3;
    if (ratio >= 0.6) return 2;
    if (ratio > 0) return 1;
    return 1;
  }, [correctCount, total]);

  const gainedXp = lesson.xp + correctCount * 2;

  function commitAndExit() {
    // persist progress to localStorage (cheap, optional — real auth comes later)
    if (typeof window !== 'undefined') {
      try {
        const raw = window.localStorage.getItem('stardy:progress');
        const map: Record<string, { stars: number; xp: number }> = raw ? JSON.parse(raw) : {};
        map[lesson.id] = { stars, xp: gainedXp };
        window.localStorage.setItem('stardy:progress', JSON.stringify(map));
      } catch {}
    }
    router.replace('/');
  }

  if (finished) {
    return (
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 32, gap: 16, paddingTop: 80 }}
        style={{ backgroundColor: isNight ? '#0a0717' : '#fff7e6' }}
      >
        <View className="items-center gap-3">
          <Text className="text-7xl">{stars === 3 ? '🏆' : stars >= 2 ? '🌟' : '💫'}</Text>
          <Text className={`text-3xl font-extrabold ${isNight ? 'text-cream' : 'text-night-900'}`}
            style={{ fontWeight: 800 }}>
            {stars}/3 ⭐
          </Text>
          <Text className={`text-base ${isNight ? 'text-night-200' : 'text-night-700'}`}>
            答对 {correctCount} / {total} 题
          </Text>
        </View>

        <View className={`rounded-3xl p-6 items-center gap-2 mt-4 ${isNight ? 'bg-night-900' : 'bg-white'}`}>
          <Text className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}>
            获得经验值
          </Text>
          <Text className={`text-5xl font-extrabold ${isNight ? 'text-amber' : 'text-night-700'}`}
            style={{ fontWeight: 800 }}>
            +{gainedXp} XP
          </Text>
          {notUnderstood.length > 0 && (
            <Text className={`text-sm mt-2 ${isNight ? 'text-night-200' : 'text-night-700'}`}>
              还有 {notUnderstood.length} 张 teach 卡可以复习
            </Text>
          )}
        </View>

        <Pressable
          onPress={commitAndExit}
          className={`mt-4 rounded-2xl p-4 items-center bg-night-500`}
        >
          <Text className="text-cream font-extrabold text-base" style={{ fontWeight: 800 }}>
            回到星图
          </Text>
        </Pressable>
      </ScrollView>
    );
  }

  // Phase 1: swipe teach cards
  if (phase === 'teach_swipe') {
    return (
      <View className="flex-1" style={{ backgroundColor: isNight ? '#0a0717' : '#fff7e6' }}>
        <Pressable
          onPress={() => router.back()}
          className="absolute right-4 top-12 z-20 w-9 h-9 rounded-full items-center justify-center bg-white/10"
        >
          <Text className={`text-base ${isNight ? 'text-cream' : 'text-night-900'}`}>✕</Text>
        </Pressable>
        <TeachSwipe lessonId={lesson.id} cards={lesson.teach} onComplete={handleTeachSwipeDone} />
      </View>
    );
  }

  // Phase 3: review_teach (wrong answer → re-show teach card)
  if (phase === 'review_teach' && reviewingTeachIdx !== null) {
    const card = lesson.teach[reviewingTeachIdx];
    const title = pickLocale(card.title, locale);
    const body = pickLocale(card.body, locale);
    return (
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 24, gap: 16, paddingTop: 80 }}
        style={{ backgroundColor: isNight ? '#0a0717' : '#fff7e6' }}
      >
        <Text className={`text-xs text-center ${isNight ? 'text-night-200' : 'text-night-700'}`}>
          📖 复习 teach 卡
        </Text>
        <View
          className={`rounded-3xl p-6 gap-4 ${isNight ? 'bg-night-900' : 'bg-white'}`}
          style={{ minHeight: 320 }}
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
        <Pressable onPress={finishReview} className="rounded-2xl p-4 items-center bg-night-500">
          <Text className="text-cream font-extrabold text-base" style={{ fontWeight: 800 }}>
            继续答题 →
          </Text>
        </Pressable>
      </ScrollView>
    );
  }

  // Phase 2: quiz loop
  const reviewable = lastCorrect === false && teachIdxFromBasedOn(q) !== null;

  return (
    <View className="flex-1" style={{ backgroundColor: isNight ? '#0a0717' : '#fff7e6' }}>
      <ScrollView className="flex-1" contentContainerStyle={{ padding: 24, gap: 16, paddingTop: 80 }}>
        <Pressable
          onPress={() => router.back()}
          className="absolute right-4 top-12 z-20 w-9 h-9 rounded-full items-center justify-center bg-white/10"
        >
          <Text className={`text-base ${isNight ? 'text-cream' : 'text-night-900'}`}>✕</Text>
        </Pressable>

        <View className="flex-row items-center gap-2">
          <Text className={`text-xs ${isNight ? 'text-night-200' : 'text-night-700'}`}>
            关卡 {lesson.id}
          </Text>
          {combo > 1 && (
            <View className="rounded-full px-2 py-0.5 bg-amber">
              <Text className="text-night-900 text-xs font-extrabold" style={{ fontWeight: 800 }}>
                🔥 {combo}
              </Text>
            </View>
          )}
        </View>

        <QuizCard
          question={q}
          locale={locale}
          selectedId={selectedId}
          onSelect={handleAnswer}
          progress={{ current: step + 1, total }}
        />
      </ScrollView>

      <FeedbackSheet
        visible={feedbackOpen}
        question={q}
        selectedId={selectedId}
        correct={lastCorrect ?? false}
        locale={locale}
        reviewable={reviewable}
        basedOnTeachIdx={teachIdxFromBasedOn(q)}
        onContinue={handleContinue}
        onReview={startReview}
      />
    </View>
  );
}
