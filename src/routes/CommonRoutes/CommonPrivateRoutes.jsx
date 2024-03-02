import { Route, Routes } from "react-router-dom";
import Comunidades from "../../pages/Comunidades";

export const CommonPrivateRoutes = ({
  HandledarkMode,
  isDarkMode,
  decreaseFontSize,
  increaseFontSize,
  handleOpenModal,
}) => {
  return (
    <Routes>
      <Route path="/comunidades" element={<Comunidades />} />
    </Routes>
  );
};
