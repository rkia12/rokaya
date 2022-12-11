import "./assets/styles/App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Details from "./pages/details";
import Dashboard from "./pages/dashboard";
import ProfileInfo from "./pages/profileInfo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/info" element={<ProfileInfo />} />
      </Routes>
    </div>
  );
}

export default App;
