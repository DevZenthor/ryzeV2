import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Clients from "./pages/Clients";
import Legal from "./pages/Legal";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Highlights / Portfolio */}
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Clients séparé */}
        <Route path="/clients" element={<Clients />} />

        {/* Legal */}
        <Route path="/legal" element={<Legal />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;