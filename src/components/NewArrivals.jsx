import ArrivalCard from "./ArrivalCard";
import { newArrivals } from "../constants/data";


const NewArrivals = () => {
  return (
    <div className="md:px-[5rem] mt-[1rem] px-[2rem] py-[2rem] lg:mt-[3rem]">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-4 gap-2">
        <div className="md:p-4 md:h-[500px] h-[200px] w-full ">
          <ArrivalCard cardDetail={newArrivals[0]} />
        </div>
        <div className="grid md:grid-rows-2 grid-rows-1">
          <div className="md:p-4 h-[250px]">
            <ArrivalCard cardDetail={newArrivals[1]} />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="md:p-4 h-[250px]">
              <ArrivalCard cardDetail={newArrivals[2]} />
            </div>
            <div className="md:p-4 h-[250px]">
              <ArrivalCard cardDetail={newArrivals[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewArrivals;
