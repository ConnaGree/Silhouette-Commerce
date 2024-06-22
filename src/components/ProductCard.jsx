import { GoHeart, GoStarFill, GoHeartFill } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { useState } from "react";

const Star = ({ filled }) => (
  <span>
    {filled ? (
      <GoStarFill className="text-[#FFAD33]" />
    ) : (
      <GoStarFill className="text-[#d3d3d3]" />
    )}
  </span>
);

const ProductCard = ({ productDetail, addToCart, addToWishList }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [showHeart, setShowHeart] = useState(false)

  const handleAddToCart = () => {
    addToCart(productDetail);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const handleAddToWishList = () => {
    addToWishList(productDetail);
    setShowHeart(true);
    setTimeout(() => {
      setShowHeart(false)
    }, 2000)
  }

  return (
    <div className="product__card relative flex-shrink-0 w-full sm:w-[210px]">
      <div className="img__container relative overflow-hidden rounded-[.5rem] flex items-center justify-center bg-[#f5f5f5] w-full h-[200px]">
        <img
          src={productDetail.img}
          className="object-contain w-[100px]"
          alt={productDetail.title}
        />
        {/* Like Button Animation */}

        {showHeart && (
          <div className="absolute w-full h-full top-0 left-0">
            <div
              className="w-full h-full backdrop-blur-md like__heart text-[#db4444] top-0 left-0 text-[5rem] flex items-center justify-center"
              style={{ animation: "pop-up 0.5s ease-out" }} // Apply the pop-up animation
            >
              <GoHeartFill />
            </div>
          </div>
        )}
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
        <span
          onClick={handleAddToWishList}
          className="w-[30px] h-[30px] flex items-center justify-center rounded-[50%] cursor-pointer bg-white"
        >
          <GoHeart className="text-[1.1rem]" />
        </span>
        <span className="w-[30px] h-[30px] flex items-center justify-center rounded-[50%] cursor-pointer bg-white">
          <FiEye className="text-[1.1rem]" />
        </span>
        <span
          onClick={handleAddToCart}
          className="w-[30px] h-[30px] flex items-center justify-center rounded-[50%] cursor-pointer bg-white"
        >
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

      <div
        className={`absolute bg-secondaryAccent px-[.4rem] py-2 rounded-[50px] flex items-center justify-center w-[150px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
          showNotification ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-[.8rem] font-[600] text-black">Added to Cart!</h2>
      </div>
    </div>
  );
};
export default ProductCard;
