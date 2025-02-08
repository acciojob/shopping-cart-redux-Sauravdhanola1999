import React from "react";
import Cart from "./components/Cart"
import Products from "./components/Products";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Products />
        <Wishlist />
        <Cart />
      </div>
      <Footer />
    </>
  );
}

export default App;