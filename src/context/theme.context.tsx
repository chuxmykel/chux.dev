import { createContext, useEffect, useState } from "react";

enum Themes {
  light = "light",
  dark = "dark",
}
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const defaultTheme: Themes = prefersDarkScheme.matches
  ? Themes.dark
  : Themes.light;

export const ThemeContext = createContext({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const userTheme: Themes = localStorage.getItem("theme") as Themes;
    if (!userTheme) {
      localStorage.setItem("theme", defaultTheme);
      setTheme(defaultTheme);
      return;
    } else {
      setTheme(userTheme);
    }
  });

  function toggleTheme() {
    const invertedTheme = invertTheme(theme);
    localStorage.setItem("theme", invertedTheme);
    setTheme(invertedTheme);
  }

  function invertTheme(theme: Themes) {
    return theme === Themes.light ? Themes.dark : Themes.light;
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={(theme === Themes.dark && Themes.dark) || ""}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
