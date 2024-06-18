import { GoHeart, GoStar, GoStarFill } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { useRef } from "react";

const Star = ({ filled }) => (
 <span>{filled ? <GoStarFill className="text-[#FFAD33]" /> : <GoStarFill className="text-[#d3d3d3]" />}</span>
);


const ProductCard = ({ productDetail, addToCart, cartItems }) => {
  const handleAddToCart = () => {
    addToCart(productDetail)
    console.log(cartItems)
  }

  return (
    <div className="product__card relative flex-shrink-0 w-full sm:w-[210px]">
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
      <span className="rating flex items-center gap-2 mt-2">
        <span className="star__container flex gap-[.5px]">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              filled={
                productDetail.rating >= star ||
                (productDetail.rating >= star - 0.5 &&
                  productDetail.rating < star)
              }
            />
          ))}
        </span>
        <span className="total__sells text-[#7D8184] text-[.8rem]">
          ({productDetail.tot_rating})
        </span>
      </span>

      <div className="product__controls absolute top-4 right-4 flex flex-col gap-y-1">
        <span className="w-[30px] h-[30px] flex items-center justify-center rounded-[50%] cursor-pointer bg-white">
          <GoHeart className="text-[1.1rem]" />
        </span>
        <span className="w-[30px] h-[30px] flex items-center justify-center rounded-[50%] cursor-pointer bg-white">
          <FiEye className="text-[1.1rem]" />
        </span>
        <span onClick={handleAddToCart} className="w-[30px] h-[30px] flex items-center justify-center rounded-[50%] cursor-pointer bg-white">
          <LuShoppingCart className="text-[1.1rem]" />
        </span>
      </div>

      {productDetail.id === 2 || productDetail.id === 4 ? (
        <div
          className="new__badge absolute px-2 py-2 rounded-[.3rem] top-4 left-4 bg-secondaryAccent text-center text-white 
      text-[.7rem]"
        >
          <span>New</span>
        </div>
      ) : (
        <div
          className="discount__badge absolute px-2 py-2 rounded-[.3rem] top-4 left-4 bg-[#db4444] text-center text-white 
      text-[.7rem]"
        >
          {productDetail.discount}
        </div>
      )}
    </div>
  );
};
export default ProductCard;
