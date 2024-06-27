
import "./App.css";
import Game from "./components/Game";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/game" element={<Game />} />
     
    </Routes>
  );
}

export default App;
