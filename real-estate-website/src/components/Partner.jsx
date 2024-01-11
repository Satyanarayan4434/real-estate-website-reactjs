import { HiOutlineHomeModern } from "react-icons/hi2";
import partnerOne from "../assets/partner-1.svg";
import partnerTwo from "../assets/partner-2.svg";
import partnerThree from "../assets/partner-3.svg";
import partnerFour from "../assets/partner-4.svg";
import partnerFive from "../assets/partner-5.svg";

const Partner = () => {
  return (
    <div className="bg-gray-800 flex flex-col justify-center items-center gap-16">
      <div className="flex items-center text-4xl font-bold text-white gap-5">
        <HiOutlineHomeModern />
        <h1>OUR PARTNERS</h1>
      </div>
      <div className="bg-partner-color w-full flex justify-around py-2">
            <img src={partnerOne} alt="" />
            <img src={partnerTwo} alt="" />
            <img src={partnerThree} alt="" />
            <img src={partnerFour} alt="" />
            <img src={partnerFive} alt="" />
      </div>
    </div>
  );
};

export default Partner;
