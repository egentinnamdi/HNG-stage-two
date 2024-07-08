import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import HomeDesktop from "./pages/HomeDesktop";

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={innerWidth >= 1024 ? <HomeDesktop /> : <Home />}
        />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
