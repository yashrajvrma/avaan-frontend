import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/schedule" element={<Schedule />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
