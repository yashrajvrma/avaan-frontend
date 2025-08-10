import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Domestic from "./pages/Domestic";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";
import AccountPage from "./pages/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/domestic" element={<Domestic />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
