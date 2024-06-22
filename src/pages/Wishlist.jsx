import { ProductCard } from "../components";

const Wishlist = ({
  wishListItems,
  setWishListItems,
  addToCart,
  addToWishList,
}) => {
  return (
    <div className="md:px-[5rem] mt-[1rem] px-[2rem] py-[2rem] lg:mt-[3rem]">
      <div className="header">
        <span className="wishlist__name text-[1.2rem] font-[600]">
          Wishlist ({wishListItems.length})
        </span>
      </div>

      <div className="product__container w-full flex mt-[1rem] gap-[1rem] flex-wrap md:flex-nowrap">
        {wishListItems.map((item, index) => (
          <ProductCard
            key={index}
            productDetail={item}
            addToCart={addToCart}
            addToWishList={addToWishList}
          />
        ))}
      </div>
    </div>
  );
};
export default Wishlist;
