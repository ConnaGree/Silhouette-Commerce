import React from "react";

const CartTotal = ({ cartItems }) => {
  // Calculates the total cost of all the products added into the cart
  const total__cost = cartItems.reduce(
    (total, item) => total + item.regularPrice * item.quantity,
    0
  );

  return (
    <div className="cart__total bg-[#f9fbfd] mt-[2rem]">
      <h2 className="text-[1.2rem] font-[600]">CartTotal</h2>
      <div className="price__detail-container">
        <div className="price__container border-b-[0.5px] my-[1.2rem]">
          <p className="final__price text-[.8rem] pb-[1rem] flex justify-between">
            Subtotal <span>Br {total__cost.toFixed(2)}</span>
          </p>
        </div>
        <div className="price__container border-b-[0.5px] my-[1.2rem]">
          <p className="final__price text-[.8rem] pb-[1rem] flex justify-between">
            Total <span>Br {total__cost.toFixed(2)}</span>
          </p>
        </div>
      </div>
      <button className="checkout__btn bg-accent px-[2rem] py-3 text-[.8rem] text-white rounded-[.3rem]">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotal;
