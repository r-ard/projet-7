import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutComponent from "./modules/Layout/Layout";
import HomePage from "./pages/Home.page";
import ThemeComponent from "./modules/Theme/Theme";
/*import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";*/

export default function App() {
  return (
    <BrowserRouter>
      <ThemeComponent />
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </LayoutComponent>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);