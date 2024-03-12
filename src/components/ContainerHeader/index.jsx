import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../Header";
import { useNavigate } from "react-router";

export default function ContainerHeader({
  children,
  HandledarkMode,
  isDarkMode,
  decreaseFontSize,
  increaseFontSize,
  resetFontSize,
  titulo,
  Extra,
}) {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const navigate = useNavigate();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    return window.screen.width;
  }

  return (
    <Container
      style={{ backgroundColor: "var(--branco)", padding: "0px" }}
      fluid
    >
      <Row className="px-0">
        <Header
          navigate={navigate}
          HandledarkMode={HandledarkMode}
          isDarkMode={isDarkMode}
          increaseFontSize={increaseFontSize}
          decreaseFontSize={decreaseFontSize}
          resetFontSize={resetFontSize}
          titulo={titulo}
          Extra={Extra}
        />
      </Row>
      <Row className="px-0">{children}</Row>
    </Container>
  );
}
