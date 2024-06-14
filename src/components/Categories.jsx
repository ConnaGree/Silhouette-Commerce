import CategoryCard from "./CategoryCard"
import { categoryItems } from "../constants/data"

const Categories = () => {
  return (
    <div className="md:px-[5rem] mt-[1rem] px-[1rem] py-[4rem] lg:mt-[3rem]">
      <div className="top__flash-sale flex justify-between items-start">
          <div className="top__widget text-[1rem] font-[600] text-[#db4444] flex items-center gap-3 mb-3">
            <span className="widget__block w-[20px] rounded-[.2rem] bg-[#db4444] h-[40px]"></span>{" "}
            Browse By Category
          </div>
      </div>

      <div className="category__card-container flex justify-between">
        {categoryItems.map((item, index) => (
          <CategoryCard key={index} categoryItem={item} />
        ))}
      </div>
    </div>
  )
}
export default Categories