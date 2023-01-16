import { createContext, useEffect, useState } from "react";

const defaultTheme = "dark";

export const ThemeContext = createContext({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const userTheme = localStorage.getItem("theme") || defaultTheme;
    setTheme(userTheme);
    console.log("Rendered with theme===========> ", theme);
  }, [theme]);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={(theme === "dark" && "dark") || ""}>{children}</div>
    </ThemeContext.Provider>
  );
}
