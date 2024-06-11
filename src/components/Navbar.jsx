import { navLinks } from "../constants/data";
import { Link } from "react-router-dom";
import { GoHeart, GoSearch } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full flex justify-between items-center relative border-b-[1px] lg:px-[5rem] px-[2rem] py-[2rem]">
      <div className="logo">
        <h1 className="text-[1.5rem] font-[700]">Silhouette</h1>
      </div>
      <ul className="hidden lg:flex items-center gap-5">
        {navLinks.map((link, index) => (
          <Link
            className="text-[.8rem]"
            to={index === 0 ? "/" : `/${link.id}`}
            key={index}
          >
            {link.title}
          </Link>
        ))}
      </ul>

      <div className="right__section hidden ss:flex items-center gap-5">
        <label
          className="flex rounded-[0.5rem] px-5 py-2 items-center bg-[#f5f5f5]"
          htmlFor=""
        >
          <input
            className="bg-transparent flex outline-0 text-[.7rem] items-center text-inherit"
            type="text"
            placeholder="Search for a product"
          />
          <span className="cursor-pointer text-[1.2rem]">
            <GoSearch />
          </span>
        </label>
        <span className="cursor-pointer text-[1.2rem]">
          <GoHeart />
        </span>
        <span className="cursor-pointer text-[1.2rem]">
          <LuShoppingCart />
        </span>
      </div>

      {/* Mobile Menu */}
      <div className="mobile__menu lg:hidden flex">
        <div className="toggle">
          <span onClick={() => setToggle((prev) => !prev)}>
            {toggle ? (
              <LiaTimesSolid className="cursor-pointer text-[1.2rem]" />
            ) : (
              <HiOutlineMenuAlt3 className="cursor-pointer text-[1.2rem]" />
            )}
          </span>
        </div>

        <ul
          className={`bg-black flex flex-col  ${
            toggle ? "xs:flex" : "hidden"
          } w-[180px] py-5 rounded-[0.5rem] absolute top-20 right-2 items-center gap-5`}
        >
          {navLinks.map((link, index) => (
            <Link
              className="text-[.9rem] text-white"
              to={index === 0 ? "/" : `/${link.id}`}
              key={index}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
