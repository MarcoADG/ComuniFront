import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import useFontSize from "./utils/hooks/useFontSize";
import { darkTheme, lightTheme } from "./utils/Themes.jsx";
import { AuthenticationProvider } from "./services/context/AuthContext.jsx";
import Root from "./routes/root";
import "./App.css";

function App() {
  const savedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(savedDarkMode === "true");
  const { size, increaseFontSize, decreaseFontSize, resetFontSize } =
    useFontSize();
  const [enableFocus, setEnableFocus] = useState(true);

  const HandledarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFocus = () => {
    setEnableFocus((prevEnableFocus) => !prevEnableFocus);
  };

  const theme = {
    ...(darkMode ? darkTheme : lightTheme),
    font: {
      size: `${size}px`,
    },
  };

  return (
    <>
      <AuthenticationProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Root
            resetFontSize={resetFontSize}
            increaseFontSize={increaseFontSize}
            decreaseFontSize={decreaseFontSize}
            HandledarkMode={HandledarkMode}
            isDarkMode={darkMode}
            handleFocus={handleFocus}
          />
        </ThemeProvider>
      </AuthenticationProvider>
    </>
  );
}

export default App;
