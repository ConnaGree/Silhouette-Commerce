import { useState, useEffect } from "react";
import { CartTotal } from "../components";
import { PiTrashSimple } from "react-icons/pi";


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
        <h2 className="font-[600] text-[1.2rem]">Your Cart</h2>
        <div className="cart__header w-[80%] border-b-[1px]"></div>
      </div>

      {cartItems.length === 0 ? (
        <p className="cart__empty text-[.9rem]">Your Cart is Empty!</p>
      ) : (
        <ul className="cart__item-container flex flex-wrap md:flex-nowrap item-start justify-around">
          {cartItems.map((item, index) => (
            <div
              className="cart__item flex w-[100%] md:w-[50%] items-center bg-[#f9fbfd] my-[1rem] rounded-[.5rem] md:px-4 md:py-3 gap-[2rem]"
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
                  <li className="item__name-price text-[.9rem]">
                    {item.title} - {item.regularPrice}
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
                          updateQuantity(index, Math.max(1, item.quantity - 1))
                        }
                        className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center bg-[#f5f5f5]"
                        disabled={item.quantity === 1 ? true : false}
                      >
                        -
                      </button>
                    )}

                    <input
                      type="text"
                      value={item.quantity}
                      className="item__qty w-[50px] border-[2px] px-[1rem] py-2 rounded-[.3rem]"
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


          <div className="coupon__checkout w-[100%] md:w-[50%]">
            <div className="flex flex-wrap items-center gap-2 mt-[1rem]">
              <input
                type="text"
                className="bg-transparent block md:flex w-[100%] lg:w-[50%] border-[2px] text-[.8rem] px-[1rem] rounded-[.3rem] py-3 items-center text-inherit"
                placeholder="Coupon Code"
              />
              <button className="bg-accent px-[2rem] py-3 block md:flex w-[100%] lg:w-[50%] text-[.8rem] text-white rounded-[.3rem]">
                Apply Coupon
              </button>
            </div>
            <CartTotal cartItems={cartItems} />
          </div>

        </ul>
      )}
    </div>
  );
};
export default Cart;
