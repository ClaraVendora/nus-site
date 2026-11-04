import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Admission from "./pages/Admission";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/academics">Academics</Link> | <Link to="/admission">Admission</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;