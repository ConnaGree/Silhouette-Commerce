import React from "react";

const CategoryCard = ({ categoryItem }) => {
  return (
    <div
      className={`border-[1px] flex-shrink-0 w-[200px] h-[100px] p-3 flex justify-center items-center flex-col ${
        categoryItem.id === 4 ? "bg-[#db4444] text-white" : ""
      } cursor-pointer`}
    >
      <img
        className="w-[30px] h-[30px]"
        src={categoryItem.icon}
        alt={categoryItem.title}
      />
      <h2 className="text-[.8rem]">{categoryItem.title}</h2>
    </div>
  );
};

export default CategoryCard;
