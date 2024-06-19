import { exploreProducts } from "../constants/data";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import ProductCard from "./ProductCard";
import { useRef } from "react";


const Explore = ({ addToCart, cartItems }) => {

  const galleryRef = useRef(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="md:px-[5rem] mt-[1rem] px-[2rem] py-[2rem] lg:mt-[3rem]">
      <div className="explore flex justify-between items-start">
        <div className="">
          <div className="top__widget text-[1rem] font-[600] text-[#db4444] flex items-center gap-3 mb-3">
            <span className="widget__block w-[20px] rounded-[.2rem] bg-[#db4444] h-[40px]"></span>{" "}
            Our Products
          </div>
          <div className="left__section flex items-center gap-[3rem] lg:gap-[4rem] flex-wrap">
            <h2 className="text-[2rem] font-[500] mb-4 sm:mb-0">
              Explore Products
            </h2>
          </div>
        </div>
        <div className="left__right-scroller md:flex hidden items-center gap-3">
          <span
            onClick={scrollLeft}
            className="w-[50px] h-[50px] rounded-[50%] bg-[#f5f5f5] flex items-center justify-center cursor-pointer"
          >
            <GoArrowLeft />
          </span>
          <span
            onClick={scrollRight}
            className="w-[50px] h-[50px] rounded-[50%] bg-[#f5f5f5] flex items-center justify-center cursor-pointer"
          >
            <GoArrowRight />
          </span>
        </div>
      </div>

      <div
        ref={galleryRef}
        className="explore__products overflow-x-auto scroll-smooth scrollbar-hide lg:mt-[1.5rem] mt-[1rem] flex gap-5 lg:flex-nowrap items-start"
      >
        {exploreProducts.map((product, index) => (
          <ProductCard
          productDetail={product}
          addToCart={addToCart}
          cartItems={cartItems}
          key={index}
        />
        ))}
      </div>

      <div className="btn__container mt-[3rem] flex justify-center">
        <button className="py-3 px-7 bg-[#db4444] rounded-[.2rem] text-[.8rem] text-white ">
          View All Products
        </button>
      </div>
    </div>
  );
}
export default Explore