import { useState } from 'react';
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '~/components/theme-provider';
import { api } from '~/lib/api-client';

export default function Login() {
  const { theme } = useTheme();
  const isNight = theme === 'night';
  const router = useRouter();
  const [name, setName] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function submit() {
    if (!name.trim()) {
      setErr('昵称不能空');
      return;
    }
    setBusy(true);
    setErr(null);
    try {
      await api.auth.signIn(name.trim());
      router.replace('/');
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : '登录失败');
    } finally {
      setBusy(false);
    }
  }

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ backgroundColor: isNight ? '#0a0717' : '#fff7e6' }}
    >
      <View className="flex-1 items-center justify-center p-8 gap-4">
        <Text className="text-7xl">🌠</Text>
        <Text
          className={`text-3xl font-extrabold ${isNight ? 'text-cream' : 'text-night-900'}`}
          style={{ fontWeight: 800 }}
        >
          Star in
        </Text>
        <Text className={`text-sm text-center ${isNight ? 'text-night-200' : 'text-night-700'}`}>
          起个昵称就能加入星图旅人俱乐部
          {'\n'}（lite auth · 暂不绑手机号）
        </Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="你的昵称（如：银河漫游者）"
          placeholderTextColor={isNight ? '#5a4e88' : '#9b8fd6'}
          className={`w-full rounded-2xl p-4 text-base ${
            isNight ? 'bg-night-900 text-cream' : 'bg-white text-night-900'
          }`}
          autoCapitalize="none"
          maxLength={32}
          returnKeyType="go"
          onSubmitEditing={submit}
          style={{ width: '100%' }}
        />

        {err && (
          <Text className="text-rose text-sm">{err}</Text>
        )}

        <Pressable
          onPress={submit}
          disabled={busy}
          className={`w-full rounded-2xl p-4 items-center ${
            busy ? 'bg-night-700' : 'bg-night-500'
          }`}
        >
          {busy ? (
            <ActivityIndicator color="#fff7e6" />
          ) : (
            <Text className="text-cream font-extrabold text-base" style={{ fontWeight: 800 }}>
              登陆开始追星 →
            </Text>
          )}
        </Pressable>

        <Pressable onPress={() => router.replace('/')} className="mt-4">
          <Text className={`text-sm ${isNight ? 'text-night-200' : 'text-night-700'}`}>
            跳过 · 先逛逛
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
