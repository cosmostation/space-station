import { BehaviorSubject } from 'rxjs';

export enum ThemeType {
  Dark = 'dark',
  Light = 'light'
}

const currentTheme$ = new BehaviorSubject<ThemeType>(ThemeType.Dark);

function getCurrentTheme (): ThemeType {
  return currentTheme$.getValue();
}

function changeTheme (theme: ThemeType): void {
  currentTheme$.next(theme);
}

export default {
  currentTheme$: currentTheme$.asObservable(),
  getCurrentTheme,
  changeTheme
}
