import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Home, Contact, Cart, Wishlist, SignUp } from "./pages";
import { Footer, Navbar, Deliverybox } from "./components";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItem] = useState([]);
  const [isInWishList, setIsInWishList] = useState(false);

  const addToCart = (product) => {
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingIndex >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[existingIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const addToWishList = (product) => {
    const existingIndex = wishListItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingIndex >= 0) {
      setIsInWishList(true);
    } else {
      setWishListItem([...wishListItems, product]);
    }
  };

  return (
    <BrowserRouter>
      <Deliverybox />
      <Navbar cartItems={cartItems} wishListItems={wishListItems} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home addToCart={addToCart} cartItems={cartItems} addToWishList={addToWishList} />}
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route
          exact
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          exact
          path="/wishlist"
          element={
            <Wishlist
              wishListItems={wishListItems}
              addToWishList={addToWishList}
              addToCart={addToCart}
              setWishListItem={setWishListItem}
            />
          }
        />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
