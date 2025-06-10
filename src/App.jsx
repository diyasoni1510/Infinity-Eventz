// App.jsx
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import WeddingPlanning from "./pages/WeddingPlanning";
import Services from "./pages/ServicesPage";
import Venues from "./pages/Venues";
import ScrollToTop from "./utilities/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wedding-planning" element={<WeddingPlanning />} />
        <Route path="/services" element={<Services />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
