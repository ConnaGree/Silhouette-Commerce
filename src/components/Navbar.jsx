import { navLinks } from "../constants/data";
import { Link } from "react-router-dom";
import { GoHeart, GoSearch } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

const Navbar = ({ cartItems }) => {
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
          <Link to="/home">
            <span className="cursor-pointer text-[1.2rem]">
              <GoSearch />
            </span>
          </Link>
        </label>
        <Link to="/wishlist">
          <span className="cursor-pointer relative text-[1.2rem]">
            <GoHeart />
            <span className="num__wishlist-items absolute rounded-[50%] flex items-center justify-center bg-accent text-white text-[.5rem] font-[600] w-[20px] h-[20px] top-[-10px] right-[-10px]">
              0
            </span>
          </span>
        </Link>
        <Link to="/cart">
          <span className="cursor-pointer relative text-[1.2rem]">
            <LuShoppingCart />
            {cartItems.length ? <span className="num__cart-items absolute rounded-[50%] flex items-center justify-center bg-accent text-white text-[.5rem] font-[600] w-[20px] h-[20px] top-[-10px] right-[-10px]">
              {cartItems.length}
            </span> : ''}
          </span>
        </Link>
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
