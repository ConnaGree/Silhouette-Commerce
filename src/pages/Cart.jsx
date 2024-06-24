import { useState, useEffect } from "react";
import { CartTotal } from "../components";
import { PiTrashSimple } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";

const Cart = ({ cartItems, setCartItems }) => {
  console.log(cartItems);

  // Updates the quantity property of a product when
  // Increment/decrement buttons are clicked
  const updateQuantity = (index, newQuantity) => {
    const newCartItem = [...cartItems];
    newCartItem[index].quantity = newQuantity;
    setCartItems(newCartItem);
  };

  // Filters the cartItems array to remove
  // a product from the cart
  const removeCartItem = (index) => {
    const newCartState = cartItems.filter(
      (_, itemIndex) => itemIndex !== index
    );
    setCartItems(newCartState);
  };

  return (
    <div className="md:px-[5rem] mt-[1rem] px-[2rem] py-[2rem] lg:mt-[3rem]">
      <div className="top_c flex items-center justify-between mb-[2rem]">
        <h2 className="font-[600] text-[1.2rem]">Your Cart</h2>
        <div className="cart__header md:w-[80%] border-b-[1px]"></div>
      </div>

      <div className="cart__field">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-y-[1rem]">
            <p className="cart__empty md:text-[8rem] text-[5rem] text-[#c7c7c7]">
              <TiShoppingCart />
            </p>
            <h2 className="text-[1.5rem] font-[600]">Your cart is empty!</h2>
            <p className="text-[.8rem] text-center">
              Looks like you haven't added anything to <br /> your cart yet.
            </p>
          </div>
        ) : (
          <div className="flex justify-around flex-wrap md:flex-nowrap">
            <div className="cart__item-container w-full mb-[3rem] md:mb-0 md:w-[40%]">
              {cartItems.map((item, index) => (
                <div
                  className="cart__item w-[100%] flex mt-[1rem] bg-[#fcfcfc] items-center rounded-[.5rem] p-[1rem] md:px-4 md:py-3 gap-[2rem]"
                  key={index}
                >
                  <div className="flex items-center gap-[2rem]">
                    <img
                      src={item.img}
                      className="w-[60px] h-[60px] object-contain rounded-[0.3rem]"
                      alt={item.title}
                    />
                  </div>

                  <div className="disc">
                    <li className="item__name-price text-[.9rem] list-none">
                      {item.title} -{" "}
                      <span className="font-[600]">
                        Br. {item.regularPrice}
                      </span>
                    </li>
                    <div className="qty__control flex items-center mt-[1rem] gap-[1rem]">
                      {item.quantity === 1 ? (
                        <button
                          className="remove__from-cart w-[40px] h-[40px] rounded-[50%] flex items-center justify-center bg-accent text-white"
                          onClick={() => removeCartItem(index)}
                        >
                          <PiTrashSimple />
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            updateQuantity(
                              index,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center bg-[#fcfcfc]"
                          disabled={item.quantity === 1 ? true : false}
                        >
                          -
                        </button>
                      )}

                      <input
                        type="text"
                        value={item.quantity}
                        className="item__qty w-[50px] border-[2px] px-[1rem] py-1 rounded-[.3rem]"
                        onChange={(e) => {
                          updateQuantity(
                            index,
                            Math.max(1, parseInt(e.target.value))
                          );
                        }}
                      />
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="add__item w-[40px] h-[40px] rounded-[50%] flex items-center justify-center bg-[#f5f5f5]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="coupon__checkout w-[100%] md:w-[40%]">
              <div className="flex flex-wrap items-center gap-2 mt-[1rem]">
                <input
                  type="text"
                  className="bg-transparent block md:flex w-[100%] border-[2px] text-[.8rem] px-[1rem] rounded-[.3rem] py-3 items-center text-inherit"
                  placeholder="Coupon Code"
                />
                <button className="bg-accent px-[2rem] py-3 block md:flex w-[100%] text-[.8rem] text-white rounded-[.3rem]">
                  Apply Coupon
                </button>
              </div>
              <CartTotal cartItems={cartItems} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
