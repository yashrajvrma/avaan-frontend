import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Domestic from "./pages/Domestic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/domestic" element={<Domestic />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
