import { View, Text, Pressable, Modal, ScrollView } from 'react-native';
import { useTheme } from '~/components/theme-provider';
import { pickLocale, type Question } from '~/lib/astro/types';

interface FeedbackSheetProps {
  visible: boolean;
  question: Question;
  selectedId: string | null;
  correct: boolean;
  locale: string;
  /** Show "复习这页 teach 卡" CTA when question has based_on. */
  reviewable: boolean;
  /** "Based on" teach card index (0-based), if linked. */
  basedOnTeachIdx: number | null;
  onContinue: () => void;
  onReview: () => void;
}

export function FeedbackSheet({
  visible,
  question,
  selectedId,
  correct,
  locale,
  reviewable,
  basedOnTeachIdx,
  onContinue,
  onReview,
}: FeedbackSheetProps) {
  const { theme } = useTheme();
  const isNight = theme === 'night';
  const explainText = pickLocale(question.explain, locale);
  const correctChoice = question.choices.find((c) => c.id === question.correctId);
  const correctLabel = correctChoice ? pickLocale(correctChoice.label, locale) : '';

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onContinue}>
      <Pressable
        className="flex-1"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        onPress={onContinue}
      >
        <Pressable
          className={`mt-auto rounded-t-3xl p-6 gap-4 ${isNight ? 'bg-night-950' : 'bg-cream'}`}
          style={{ maxHeight: '70%' }}
          onPress={() => {}}
        >
          <View className="items-center pt-2">
            <View
              className={`w-12 h-1.5 rounded-full mb-3 ${isNight ? 'bg-night-700' : 'bg-night-200'}`}
            />
            <View
              className={`w-20 h-20 rounded-full items-center justify-center ${
                correct ? 'bg-mint' : 'bg-rose'
              }`}
            >
              <Text className="text-4xl">{correct ? '🎉' : '💡'}</Text>
            </View>
          </View>

          <Text
            className={`text-2xl font-extrabold text-center ${isNight ? 'text-cream' : 'text-night-900'}`}
            style={{ fontWeight: 800 }}
          >
            {correct ? '答对了！' : '再想想看'}
          </Text>

          {!correct && (
            <Text
              className={`text-sm text-center ${isNight ? 'text-night-200' : 'text-night-700'}`}
            >
              正确答案：{correctLabel}
            </Text>
          )}

          <ScrollView className="max-h-48">
            <Text
              className={`text-base leading-6 ${isNight ? 'text-cream' : 'text-night-900'}`}
            >
              {explainText}
            </Text>
          </ScrollView>

          {reviewable && (
            <Pressable
              onPress={onReview}
              className={`rounded-2xl p-3 items-center border-2 ${
                isNight ? 'border-night-500 bg-night-900' : 'border-night-500 bg-white'
              }`}
            >
              <Text className={`text-sm font-bold ${isNight ? 'text-night-200' : 'text-night-700'}`}>
                📖 复习这页 teach 卡 (第 {basedOnTeachIdx !== null ? basedOnTeachIdx + 1 : '?'} 张)
              </Text>
            </Pressable>
          )}

          <Pressable
            onPress={onContinue}
            className={`rounded-2xl p-4 items-center ${
              correct ? 'bg-mint' : 'bg-night-500'
            }`}
          >
            <Text
              className="text-night-900 font-extrabold text-base"
              style={{ fontWeight: 800 }}
            >
              {correct ? '继续 →' : '我懂了'}
            </Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
