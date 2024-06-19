import { footerLinks } from "../constants/data";
import { IoSend } from "react-icons/io5";
import { QrCode, android, appstore } from "../assets";

const Footer = () => {
  return (
    <div className="md:px-[5rem] mt-[1rem] px-[2rem] py-[3rem] lg:mt-[3rem] bg-black text-white flex flex-col md:flex-row justify-around">
      <div className="left__section gap-[2rem] mb-[1.5rem] lg:mb-0">
        <h2 className="title text-[1.2rem] font-[600] mb-[1.5rem]">
          Silhouette
        </h2>
        <a href="" className="subscribe text-[.9rem] mb-[1.5rem]">
          Subscribe
        </a>
        <p className="text-[.7rem] text-[#FAFAFA] my-[1.5rem]">
          Get 10% off your first order
        </p>
        <label
          className="flex rounded-[0.5rem] border-[2px] px-5 py-2 items-center justify-between bg-transparent"
          htmlFor=""
        >
          <input
            className="bg-transparent flex outline-0 text-[.7rem] items-center text-inherit"
            type="text"
            placeholder="Search for a product"
          />
          <span className="cursor-pointer text-[1.2rem]">
            <IoSend />
          </span>
        </label>
      </div>

      <div className="middle__section flex justify-between flex-col md:flex-row md:gap-[10rem] gap-[1.5rem]">
        {footerLinks.map((item, index) => (
          <div key={index}>
            <h2 className="mb-[1rem]">{item.linkTitle}</h2>
            {item.links.map((subItem, subIndex) => (
              <a
                key={subIndex}
                className="block text-[.7rem] mb-2 text-[#FAFAFA]"
                href={subItem.link}
              >
                {subItem.name}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="right__section">
        <h2>Download App</h2>
        <p className="className text-[.6rem]">Save $3 with App New User Only</p>
        <div className="gap-1 mt-[1rem] flex">
          <span className="qrCode">
            <img src={QrCode} alt="QrCode" />
          </span>
          <div>
            <img
              src={android}
              className="block object-fit mb-[.5rem]"
              alt="android download"
            />
            <img className="block" src={appstore} alt="apple download" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
