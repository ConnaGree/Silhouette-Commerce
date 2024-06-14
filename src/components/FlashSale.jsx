import { useState, useEffect, useRef } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import ProductCard from "./ProductCard";
import { flashSaleProducts } from "../constants/data";

const FlashSale = () => {

  const targetDate = new Date("Jun 20, 2024 18:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }


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
      <div className="top__flash-sale flex justify-between items-start">
        <div className="">
          <div className="top__widget text-[1rem] font-[600] text-[#db4444] flex items-center gap-3 mb-3">
            <span className="widget__block w-[20px] rounded-[.2rem] bg-[#db4444] h-[40px]"></span>{" "}
            Today's
          </div>
          <div className="left__section flex items-center gap-[3rem] lg:gap-[4rem] flex-wrap">
            <h2 className="text-[2rem] font-[500] mb-4 sm:mb-0">Flash Sale</h2>
            <div className="timer__container flex gap-5 items-center">
              <span className="days">{timeLeft.days}</span>{" "}
              <span className="text-[#db4444] text-[1.5rem]">:</span>
              <span className="hours">{timeLeft.hours}</span>{" "}
              <span className="text-[#db4444] text-[1.5rem]">:</span>
              <span className="minutes">{timeLeft.minutes}</span>{" "}
              <span className="text-[#db4444] text-[1.5rem]">:</span>
              <span className="seconds">{timeLeft.seconds}</span>
            </div>
          </div>
        </div>
        <div className="left__right-scroller md:flex hidden items-center gap-3">
          <span onClick={scrollLeft} className="w-[50px] h-[50px] rounded-[50%] bg-[#f5f5f5] flex items-center justify-center cursor-pointer">
            <GoArrowLeft />
          </span>
          <span onClick={scrollRight} className="w-[50px] h-[50px] rounded-[50%] bg-[#f5f5f5] flex items-center justify-center cursor-pointer">
            <GoArrowRight />
          </span>
        </div>
      </div>

      <div ref={galleryRef} className="flash__sale-products overflow-x-auto scroll-smooth scrollbar-hide lg:mt-[1.5rem] mt-[1rem] flex gap-5 lg:flex-nowrap items-start">
        {flashSaleProducts.map((product, index) => (
          <ProductCard productDetail={product} key={index} />
        ))}
      </div>

      <div className="btn__container mt-[3rem] flex justify-center">
        <button className="py-3 px-7 bg-[#db4444] rounded-[.2rem] text-[.8rem] text-white ">
          View All Products
        </button>
      </div>
    </div>
  );
};
export default FlashSale;
