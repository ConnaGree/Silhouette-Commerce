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
      <Categories />
      <BestSelling addToCart={addToCart} cartItems={cartItems} />
      <Banner />
      <Explore addToCart={addToCart} cartItems={cartItems} />
      <NewArrivals />
      <Features />
    </div>
  );
};
export default Home;
