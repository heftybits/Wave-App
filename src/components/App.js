import React from "react";
import Wave from "./Wave";
import Switch from "./Toggle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";
import { GlobalStyles } from "./GlobalStyles";
import { useDarkMode } from "./useDarkMode";

export default App => {
  const [theme, toggleTheme, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Switch theme={theme} toggleTheme={toggleTheme} />
        <Wave />
      </>
    </ThemeProvider>
  );
};
