import { createContext, useContext, useMemo, useState, useEffect, type ReactNode } from 'react';

type Theme = 'night' | 'day';

type Ctx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

const ThemeCtx = createContext<Ctx>({ theme: 'night', setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('night');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem('stardy:theme');
    if (saved === 'day' || saved === 'night') setTheme(saved);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      theme,
      setTheme: (t) => {
        setTheme(t);
        if (typeof window !== 'undefined') window.localStorage.setItem('stardy:theme', t);
      },
    }),
    [theme],
  );

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => useContext(ThemeCtx);
