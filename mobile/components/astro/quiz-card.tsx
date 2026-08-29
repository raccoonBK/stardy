import { View, Text, Pressable } from 'react-native';
import { useTheme } from '~/components/theme-provider';
import { pickLocale, type Question } from '~/lib/astro/types';

interface QuizCardProps {
  question: Question;
  locale: string;
  selectedId: string | null;
  onSelect: (choiceId: string) => void;
  disabled?: boolean;
  progress?: { current: number; total: number };
}

export function QuizCard({
  question,
  locale,
  selectedId,
  onSelect,
  disabled,
  progress,
}: QuizCardProps) {
  const { theme } = useTheme();
  const isNight = theme === 'night';
  const isImage = question.kind === 'image';
  const text = pickLocale(question.prompt, locale);

  return (
    <View className="gap-4">
      {progress && (
        <View className="flex-row items-center gap-2">
          <View className={`h-2 flex-1 rounded-full overflow-hidden ${isNight ? 'bg-night-900' : 'bg-night-200'}`}>
            <View
              className={`h-full ${isNight ? 'bg-night-500' : 'bg-night-700'}`}
              style={{ width: `${(progress.current / progress.total) * 100}%` }}
            />
          </View>
          <Text className={`text-xs ${isNight ? 'text-night-200' : 'text-night-700'}`}>
            {progress.current}/{progress.total}
          </Text>
        </View>
      )}

      {isImage && question.figure && (
        <Text className="text-center text-7xl">{question.figure}</Text>
      )}

      <Text
        className={`text-xl font-extrabold ${isNight ? 'text-cream' : 'text-night-900'}`}
        style={{ fontWeight: 800 }}
      >
        {text}
      </Text>

      <View className="gap-3">
        {question.choices.map((c) => {
          const label = pickLocale(c.label, locale);
          const isSelected = selectedId === c.id;
          const isCorrect = c.id === question.correctId;
          const revealed = selectedId !== null;

          let bg = isNight ? 'bg-night-900' : 'bg-white';
          let fg = isNight ? 'text-cream' : 'text-night-900';
          let mark: string | null = null;

          if (revealed) {
            if (isCorrect) {
              bg = 'bg-mint';
              fg = 'text-night-900';
              mark = '✓';
            } else if (isSelected && !isCorrect) {
              bg = 'bg-rose';
              fg = 'text-night-900';
              mark = '✗';
            }
          }

          return (
            <Pressable
              key={c.id}
              onPress={() => !disabled && !revealed && onSelect(c.id)}
              disabled={disabled || revealed}
              className={`rounded-2xl p-4 flex-row items-center justify-between gap-3 ${bg}`}
            >
              <View className="flex-row items-center gap-3 flex-1">
                {c.glyph && <Text className="text-2xl">{c.glyph}</Text>}
                <Text className={`text-base ${fg}`} style={revealed && isCorrect ? { fontWeight: 800 } : undefined}>
                  {label}
                </Text>
              </View>
              {mark && (
                <View className="w-7 h-7 rounded-full bg-cream items-center justify-center">
                  <Text className="text-night-900 text-sm font-extrabold">{mark}</Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
