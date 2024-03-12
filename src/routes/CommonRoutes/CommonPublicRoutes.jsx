import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import Comunidades from "../../pages/Comunidades";
import Reunioes from "../../pages/Reunioes";
import Reuniao from "../../pages/Reuniao";

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
      <Route path="/reunioes" element={<Reunioes />} />
      <Route path="/reuniao" element={<Reuniao />} />
    </Routes>
  );
};
