import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react"; // Don't forget to import useState

import { Home, Contact, Cart, Wishlist, SignUp } from "./pages";
import { Footer, Navbar, Deliverybox } from "./components"; // Make sure to import Deliverybox

function App() {
  // State to hold the products added to the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add products to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <BrowserRouter>
      <Deliverybox />
      <Navbar cartItems={cartItems} />
      <Routes>
        {/* Route for Home */}
        <Route
          exact
          path="/"
          element={<Home addToCart={addToCart} cartItems={cartItems} />}
        />
        {/* Route for Contact */}
        <Route exact path="/contact" element={<Contact />} />
        {/* Route for Cart */}
        <Route
          exact
          path="/cart"
          element={<Cart cartItems={cartItems} />}
        />
        {/* Route for Wishlist */}
        <Route exact path="/wishlist" element={<Wishlist />} />
        {/* Route for SignUp */}
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
