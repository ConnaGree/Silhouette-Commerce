import { useState, useEffect } from "react";
import { CartTotal } from "../components";
import { PiTrashSimple } from "react-icons/pi";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";


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
    <div className="cart__item-box flex justify-around">
          {cartItems.length === 0 ? (
            <p className="cart__empty text-[.8rem]">Your Cart is Empty!</p>
          ) : (
            <ul className="cart__item-container w-[40%]">
              {cartItems.map((item, index) => (
                <div
                  className="cart__item flex items-center justify-between bg-[#f9fbfd] my-[1rem] rounded-[.5rem] md:px-4 md:py-3 px-[1rem] py-[.6rem]"
                  key={index}
                >
                  <div className="flex items-center gap-[1.5rem] item__box">
                    <img
                      src={item.img}
                      className="w-[60px] h-[60px] object-contain rounded-[0.3rem]"
                      alt={item.title}
                    />
                    <div className="item__desc">
                      <li className="item__name-price text-[.7rem] mb-[.5rem]">
                        {item.title} - Br. {item.regularPrice}
                      </li>
                      <div className="qty__control flex items-center gap-[1rem]">
                        {item.quantity === 1 ? (
                          <button
                            className="remove__from-cart bg-accent w-[30px] h-[30px] rounded-[50%] text-white flex items-center justify-center"
                            onClick={() => removeCartItem(index)}
                          >
                          <PiTrashSimple />
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              updateQuantity(index, Math.max(1, item.quantity - 1))
                            }
                            className="sub__item w-[30px] h-[30px] rounded-[50%] bg-white flex items-center justify-center text-[.8rem]"
                            disabled={item.quantity === 1 ? true : false}
                          >
                            <LuMinus />
                          </button>
                        )}

                        <input
                          type="text"
                          value={item.quantity}
                          className="item__qty w-[70px] px-[1rem] py-[.2rem] border-[2px] rounded-[.3rem] text-[.8rem]"
                          onChange={(e) => {
                            updateQuantity(
                              index,
                              Math.max(1, parseInt(e.target.value))
                            );
                          }}
                        />
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="add__item w-[30px] h-[30px] rounded-[50%] bg-white flex items-center justify-center"
                        >
                          <GoPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          )}

        <div className="coupon__checkout">
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
    </div>
  );
};
export default Cart;
