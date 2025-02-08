import React from "react";
import Cart from "./components/Cart"
import Products from "./components/Products";
import Footer from "./components/Footer";
import WishList from "./components/WishList";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Products />
        <WishList />
        <Cart />
      </div>
      <Footer />
    </>
  );
}

export default App;