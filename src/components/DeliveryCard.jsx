import React from "react";

const DeliveryCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center mb-5 md:mb-0">
      <img src={item.img} alt={item.title} className="mb-[1.1rem]" />
      <div className="item__desc">
        <h2 className="text-center text-[1rem] mb-1 font-[600]">
          {item.title}
        </h2>
        <p className="text-center text-[.8rem]">{item.desc}</p>
      </div>
    </div>
  );
};

export default DeliveryCard;
