import { useEffect, useState } from 'react';
import themeStore from 'stores/theme-store';
import { ThemeType } from 'types';

export default function useTheme (): ThemeType {
  const [theme, setTheme] = useState<ThemeType>(themeStore.getCurrentTheme());
  useEffect(() => {
    const subscription = themeStore.currentTheme$.subscribe(setTheme);
    return (): void => subscription.unsubscribe();
  }, [setTheme]);
  return theme;
}
