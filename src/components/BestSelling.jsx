import ProductCard from "./ProductCard";
import { bestSelling } from "../constants/data";

const BestSelling = ({ addToCart, cartItems }) => {
  return (
    <div className="md:px-[5rem] mt-[1rem] px-[2rem] py-[2rem] lg:mt-[3rem]">
      <div className="best__selling flex flex-col">
        <div className="top__widget text-[1rem] font-[600] text-[#db4444] flex items-center gap-3 mb-3">
          <span className="widget__block w-[20px] rounded-[.2rem] bg-[#db4444] h-[40px]"></span>{" "}
          This Month
        </div>
        <h2 className="text-[2rem] font-[500] mb-4 sm:mb-0">Best Selling Products</h2>
      </div>

      <div className="bestseller__products overflow-x-auto scroll-smooth scrollbar-hide lg:mt-[1.5rem] mt-[1rem] flex gap-5 lg:flex-nowrap items-start">
        {bestSelling.map((product, index) => (
          <ProductCard
          productDetail={product}
          addToCart={addToCart}
          cartItems={cartItems}
          key={index}
        />
        ))}
      </div>
    </div>
  );
}
export default BestSelling