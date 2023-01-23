import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Card } from "./components/Card/Card";
import { darkTheme, lightTheme } from "./styles/GlobalStyles";
import { Kanban } from "./pages/Kanban";

function App() {
  const [themeColor, setThemeColor] = useState(
    "light" ? lightTheme : darkTheme
  );

  return (
    <ThemeProvider theme={themeColor}>
      <Kanban />
    </ThemeProvider>
  );
}

export default App;
