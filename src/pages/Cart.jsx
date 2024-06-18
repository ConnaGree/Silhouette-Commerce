import { useState, useEffect } from "react";
import { CartTotal } from "../components";


const Cart = ({ cartItems }) => {
  const [prodCounter, setProdCounter] = useState(0); // Controls the total number of products in the cart

  console.log(cartItems);

  // Whenever there is a change in the cartItems array
  // calculate the total number of items in the cart and update the state variable tracking the numbers
  useEffect(() => {
    const totalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setProdCounter(totalQuantity);
  }, [cartItems]);

  return (
    <div className="md:px-[5rem] mt-[1rem] px-[2rem] py-[2rem] lg:mt-[3rem]">
      <div className="top_c flex items-center justify-between mb-[2rem]">
        <h2 className="font-[600]">Your Cart</h2>
        <div className="cart__header w-[80%] border-b-[1px]"></div>
      </div>

      {cartItems.length === 0 ? (
        <p className="cart__empty">Your Cart is Empty!</p>
      ) : (
        <ul className="cart__item-container">
          {/* <div className="cart__header-section flex justify-between">
            <span className="text-[.7rem]">Product</span>
            <span className="text-[.7rem]">Price</span>
            <span className="text-[.7rem]">Quantity</span>
            <span className="text-[.7rem]">Subtotal</span>

          </div> */}
          {cartItems.map((item, index) => (
            <div
              className="cart__item flex items-center justify-between bg-[#f9fbfd] my-[1rem] rounded-[.5rem] md:px-4 md:py-3 p-2"
              key={index}
            >
              <div className="flex items-center gap-2">
                <img
                  src={item.img}
                  className="w-[60px] h-[60px] object-contain rounded-[0.3rem]"
                  alt={item.title}
                />
                <span className="text-[.8rem]">{item.title}</span>
              </div>

              <span className="price text-[.7rem]">
                Br. {item.regularPrice}
              </span>

              <input
                className="border-[1px] rounded-[.5rem] px-4 py-1 text-[.7rem] items-center text-inherit"
                type="number"
              />

              <span className="subtotal text-[.7rem]">
                Br. {item.regularPrice}
              </span>
            </div>
          ))}
        </ul>
      )}
      <div className="coupon__checkout flex justify-between">
        <div className="flex items-center gap-2 mt-[1rem]">
          <input
            type="text"
            className="bg-transparent flex border-[2px] text-[.8rem] px-[1rem] rounded-[.3rem] py-3 items-center text-inherit"
            placeholder="Coupon Code"
          />
          <button className="bg-accent px-[2rem] py-3 text-[.8rem] text-white rounded-[.3rem]">
            Apply Coupon
          </button>
        </div>
        <CartTotal cartItems={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
