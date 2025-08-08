import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Domestic from "./pages/Domestic";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/domestic" element={<Domestic />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
