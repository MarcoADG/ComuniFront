import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import Comunidades from "../../pages/Comunidades";

export const CommonPublicRoutes = ({
  HandledarkMode,
  isDarkMode,
  decreaseFontSize,
  increaseFontSize,
}) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/comunidades" element={<Comunidades />} />
    </Routes>
  );
};
