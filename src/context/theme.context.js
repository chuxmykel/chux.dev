import React, { createContext, useEffect, useState } from "react";

const Themes = {
  light: "light",
  dark: "dark",
};
function invertTheme(theme) {
  return theme === Themes.light ? Themes.dark : Themes.light;
}

export const ThemeContext = createContext({
  theme: null,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  });

  function toggleTheme() {
    const invertedTheme = invertTheme(theme);
    window.__setPreferredTheme(invertedTheme);
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
