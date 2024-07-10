import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import HomeDesktop from "./pages/HomeDesktop";
import StoreDesktop from "./components/StoreDesktop";
import { useReducer } from "react";

const initialState = [];

function reducer(state, { type, payload }) {
  switch (type) {
    case "add-to-cart":
      return [
        ...state,
        {
          id: payload.id,
          image: payload.image,
          prodName: payload.productName,
          price: payload.price,
        },
      ];
    case "delete":
      const removedItem = state.filter((_, index) => index !== payload);
      return removedItem;
    default:
      return state;
  }
}

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [prodAdd, dispatch] = useReducer(reducer, initialState);

  window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
  const widthCondition = innerWidth >= 1024;
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            widthCondition ? (
              <HomeDesktop />
            ) : (
              <Home prodAdd={prodAdd} dispatch={dispatch} />
            )
          }
        />
        <Route
          path="/cart"
          element={
            widthCondition ? (
              <StoreDesktop />
            ) : (
              <ShoppingCart prodAdd={prodAdd} dispatch={dispatch} />
            )
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
