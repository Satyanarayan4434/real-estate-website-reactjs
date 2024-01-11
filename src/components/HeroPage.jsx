import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiPriceTag3Line } from "react-icons/ri";
import firstVector from '../assets/Vector-1.png'
import secondVector from '../assets/Vector-2.png'
import thirdVector  from '../assets/Vector-3.png'
import forthVector from '../assets/Vector-4.png'
import fifthVector from '../assets/Vector-5.png'
import sixthVector from '../assets/Vector-6.png'

const HeroPage = () => {
  return (
    <div className="bg-gray-800 h-[35.7rem]  relative  overflow-hidden">
    <img src={firstVector} alt="" className="absolute z-20 top-0 right-[13rem]"/>
    <img src={secondVector} alt="" className="absolute z-20 top-0 right-0 "/>
    <img src={thirdVector} alt="" className="absolute z-20 bottom-0 right-0"/>
    <img src={forthVector} alt="" className="absolute z-20 top-16  right-[35rem]"/>
    <img src={fifthVector} alt="" className="absolute z-20 top-[15rem] right-0"/>
    <img src={sixthVector} alt="" className="absolute z-20 top-0 right-[8rem]"/>
      <div className="bg-[#B26304]  w-[40rem] h-[40rem] absolute -top-[8rem] -left-[10rem] rounded-full blur-3xl"></div>
      <div className="bg-[#ADADAD]  w-[40rem] h-[40rem] absolute top-[10rem] -right-[10rem] rounded-full blur-3xl"></div>
      <div className="bg-[#292929]  opacity-50  w-[70rem] h-[30rem] flex flex-col"></div>
      <div className="absolute top-10 left-16 w-[65rem]">
        <h1 className="font-bold  text-[5rem] w-[45rem]  text-white">
          Its your home make it <span className="text-[#F9BD77]">awesome.</span>
        </h1>
        <div className="flex gap-8">
          <div className="flex items-center gap-3 text-white w-[15rem]">
            <div>
              <HiOutlineLocationMarker size="3em" />
            </div>
            <p className=" font-semibold ">
              Wide variety of houses at desirable locations
            </p>
          </div>
          <div className="w-[1px] h-[5rem] bg-white"></div>
          <div className="flex items-center gap-3 text-white w-[15rem]">
            <div className="-rotate-90">
              <RiPriceTag3Line size="3em" />
            </div>
            <p className=" font-semibold ">
              Prices that are too tempting to refuse
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HeroPage;
