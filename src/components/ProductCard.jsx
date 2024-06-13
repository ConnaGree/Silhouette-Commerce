import { GoHeart, GoStar, GoStarFill } from "react-icons/go";
import { FiEye } from "react-icons/fi";
import { useRef } from "react";

const ProductCard = ({ productDetail }) => {

  return (
    <div className="product__card relative flex-shrink-0 w-full sm:w-[35%]">
      <div className="img__container rounded-[.5rem] flex items-center justify-center bg-[#f5f5f5] w-full h-[200px]">
        <img
          src={productDetail.img}
          className="object-contain w-[100px]"
          alt={productDetail.title}
        />
      </div>
      <p className="prod__title font-[600] mt-3 text-[1rem]">
        {productDetail.title}
      </p>
      <div className="price__container mt-1 flex gap-3">
        <span className="sale__price text-[#db4444] text-[.9rem]">
          Br. {productDetail.salePrice}
        </span>
        <span className="regular__price line-through text-[.9rem] text-[#7D8184]">
          Br. {productDetail.regularPrice}
        </span>
      </div>
      <p className="rating flex items-center gap-2 mt-2">
        <div className="star__container flex">
          {Array.from({ length: productDetail.rating }, (v, i) => (
            <span
              key={i}
              className={
                i < productDetail.rating ? "text-yellow-500" : "text-gray-400"
              }
              style={{ fontSize: "24px" }}
            >
              {i < productDetail.rating ? (
                <GoStarFill className="text-[.9rem]" />
              ) : (
                <GoStar className="text-[.9rem]" />
              )}
            </span>
          ))}
        </div>
        <span className="total__sells text-[#7D8184] text-[.8rem]">
          ({productDetail.tot_rating})
        </span>
      </p>

      <div className="product__controls absolute top-4 right-4 flex flex-col">
        <span className="w-[30px] h-[30px] flex items-center justify-center rounded-[50%] cursor-pointer bg-white mb-1">
          <GoHeart className="text-[1.2rem]" />
        </span>
        <span className="w-[30px] h-[30px] flex items-center justify-center rounded-[50%] cursor-pointer bg-white">
          <FiEye className="text-[1.2rem]" />
        </span>
      </div>

      <div
        className="discount__badge absolute px-3 py-2 rounded-[.3rem] top-4 left-4 bg-[#db4444] text-center text-white 
      text-[.7rem]"
      >
        {productDetail.discount}
      </div>
    </div>
  );
};
export default ProductCard;
