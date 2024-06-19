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

const Home = ({ addToCart, cartItems }) => {
  return (
    <div>
      <Hero />
      <FlashSale addToCart={addToCart} cartItems={cartItems} />
      <Categories addToCart={addToCart} />
      <BestSelling addToCart={addToCart} />
      <Banner />
      <Explore addToCart={addToCart} />
      <NewArrivals />
      <Features />
    </div>
  );
};
export default Home;
