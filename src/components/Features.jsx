import DeliveryCard from "./DeliveryCard";
import { deliveryItems } from "../constants/data";

const Features = ({}) => {
  return (
    <div className="md:px-[5rem] mt-[1rem] px-[2rem] py-[2rem] lg:mt-[3rem] flex justify-around flex-col md:flex-row">
      {deliveryItems.map((item, index) => (
        <DeliveryCard key={index} item={item} />
      ))}
    </div>
  );
};
export default Features;
