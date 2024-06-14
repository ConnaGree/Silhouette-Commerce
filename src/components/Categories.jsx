import CategoryCard from "./CategoryCard"
import { categoryItems } from "../constants/data"

const Categories = () => {
  return (
    <div className="md:px-[5rem] mt-[1rem] px-[2rem] py-[3rem] lg:mt-[3rem]">
      <div className="category__card flex flex-col">
        <div className="top__widget text-[1rem] font-[600] text-[#db4444] flex items-center gap-3 mb-3">
          <span className="widget__block w-[20px] rounded-[.2rem] bg-[#db4444] h-[40px]"></span>{" "}
          Categories
        </div>
        <h2 className="text-[2rem] font-[500] mb-4 sm:mb-0">Browse By Category</h2>
      </div>

      <div className="category__card-container overflow-x-auto scroll-smooth scrollbar-hide flex justify-between mt-3 gap-2">
        {categoryItems.map((item, index) => (
          <CategoryCard key={index} categoryItem={item} />
        ))}
      </div>
    </div>
  );
}
export default Categories