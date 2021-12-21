import { BehaviorSubject } from 'rxjs';

export enum ThemeType {
  Dark = 'dark',
  Light = 'light'
}
const _theme = window.localStorage.getItem('theme');
const theme = _theme === 'dark' ? ThemeType.Dark : ThemeType.Light;
const currentTheme$ = new BehaviorSubject<ThemeType>(theme);

function getCurrentTheme (): ThemeType {
  return currentTheme$.getValue();
}

function changeTheme (theme: ThemeType): void {
  window.localStorage.setItem('theme', theme);
  currentTheme$.next(theme);
}

export default {
  currentTheme$: currentTheme$.asObservable(),
  getCurrentTheme,
  changeTheme
};
