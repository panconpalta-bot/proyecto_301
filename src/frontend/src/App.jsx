import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from './pages/Register'; 
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import LoginError from './pages/LoginError';
import Figuras from "./pages/Figuras";
import Carrito from "./pages/Carrito";
import Peluches from "./pages/Peluches";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/login-error" element={<LoginError />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/Figuras" element={<Figuras/>} />
        <Route path="/Carrito" element={<Carrito/>} />
        <Route path="/Peluches" element={<Peluches/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
