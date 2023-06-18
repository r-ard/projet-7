import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutComponent from "./modules/Layout/Layout";
import HomePage from "./pages/Home.page";
import ThemeComponent from "./modules/Theme/Theme";
import AboutPage from "./pages/About.page";
import ApartmentPage from "./pages/Apartment.page";
import NotFoundPage from "./pages/NotFound.page";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeComponent />
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/apartment" element={<ApartmentPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </LayoutComponent>
    </BrowserRouter>
  );
};