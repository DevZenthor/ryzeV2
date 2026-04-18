import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Legal from "./pages/Legal";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Route logique */}
        <Route path="/highlights" element={<Portfolio />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;