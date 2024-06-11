import { categories } from "../constants/data"
import { apple, iphone } from "../assets";

const Hero = () => {
  return (
    <div className="flex justify-between lg:px-[5rem] px-[2rem]">
      <div className="left__section border-r-[1px] w-[25%] pt-10">
        <ul>
          {categories.map((link, index) => (
            <li
              className={`${
                index !== categories.length - 1 ? "mb-4" : "my-0"
              } text-[0.8rem]`}
              key={index}
            >
              <a href="">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="right__section w-[70%]  pt-10">
        <div className="banner__container flex justify-between bg-black p-[4rem]">
          <div className="banner__left w-[48%] text-white">
            <span className="flex text-[.9rem] gap-4 items-center">
              <img src={apple} alt={apple} /> iPhone 14 Series
            </span>
            <h1 className="text-[3rem] mt-4 font-[600] mb-5">
              Up to 10% <br /> off Voucher
            </h1>
            <a href="" className="text-[.9rem] border-b-[1px] pb-1">
              Shop Now
            </a>
          </div>
          <div className="banner__right w-[48%] flex flex-end">
            <img src={iphone} alt="iphone" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero