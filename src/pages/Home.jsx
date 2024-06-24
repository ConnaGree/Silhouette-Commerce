import {
  Hero,
  FlashSale,
  Categories,
  BestSelling,
  Banner,
  Explore,
  NewArrivals,
  Features,
} from "../components";
import { useState } from "react";

const Home = ({ addToCart, cartItems, addToWishList }) => {
  return (
    <div>
      <Hero />
      <FlashSale
        addToCart={addToCart}
        cartItems={cartItems}
        addToWishList={addToWishList}
      />
      <Categories addToCart={addToCart} />
      <BestSelling 
        addToCart={addToCart} 
        addToWishList={addToWishList} />
      <Banner />
      <Explore 
        addToCart={addToCart}
        addToWishList={addToWishList} />
      <NewArrivals />
      <Features />
    </div>
  );
};
export default Home;
