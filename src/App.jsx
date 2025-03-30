import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Game from "./pages/Game";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/website" element={<Home />} />
        <Route path="/website/about" element={<About />} />
        <Route path="/website/game" element={<Game />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
