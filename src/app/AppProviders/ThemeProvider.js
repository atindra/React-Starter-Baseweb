import { createContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider as BaseuiThemeProvider, DarkTheme, LightTheme } from 'baseui';

import { THEME_LS_KEY } from 'constants';
import { useLocalStorageState } from 'hooks/useLocalStorageState';

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};
const DEFAULT_THEME = THEMES.DARK;

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorageState(THEME_LS_KEY, DEFAULT_THEME);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BaseuiThemeProvider theme={theme === THEMES.LIGHT ? LightTheme : DarkTheme}>{children}</BaseuiThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
