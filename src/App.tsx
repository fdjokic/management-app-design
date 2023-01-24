import React, { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/GlobalStyles";
import { Kanban } from "./pages/Kanban";

function App() {
  const [themeColor, setThemeColor] = useState<any>(
    localStorage.getItem("theme") || "dark"
  );

  const handleTheme = () => {
    if (themeColor === "light") {
      setThemeColor("dark");
      return;
    }
    setThemeColor("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", themeColor);
  }, [themeColor]);

  return (
    <ThemeProvider theme={themeColor === "light" ? lightTheme : darkTheme}>
      <Kanban />
      <button onClick={handleTheme}>Change theme</button>
    </ThemeProvider>
  );
}

export default App;
