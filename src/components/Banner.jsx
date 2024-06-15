import { useState, useEffect } from "react";
import { speaker } from "../assets";

const Banner = () => {
  return (
    <div className="flex justify-between flex-wrap md:flex-nowrap gap-y-[3rem] md:px-[5rem] mt-[1rem] px-[2rem] py-[3rem] lg:mt-[3rem] bg-black">
      <div className="left__section">
        <span className="text-[.8rem] text-[#00FF66]">Category</span>
        <h2 className="lg:text-[4rem] text-[2rem] text-[#fff] font-[600] my-4">
          Enhance Your <br /> Music Experience
        </h2>

        <button className="text-[#fff] font-[600] text-[.8rem] bg-[#00FF66] rounded-[.3rem] px-10 py-4">
          Buy Now!
        </button>
      </div>
      <div className="right__section">
        <img className="speaker__img bg-radial-g" src={speaker} alt="speaker" />
      </div>
    </div>
  );
}
export default Banner