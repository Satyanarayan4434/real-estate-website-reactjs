import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiToolsLine } from "react-icons/ri";
import { Ri24HoursFill } from "react-icons/ri";
import whyUsImg from "../assets/whyUsImg.svg";

const WhyUs = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-between relative">
      <div className="w-[10rem] flex justify-center p-11">
        <HiOutlineHomeModern size={"4em"} />
      </div>
      <div className="w-[70rem] h-[20rem] bg-[#6D4616] flex flex-col justify-center items-center p-11 gap-4 rounded-l-3xl">
        <h1 className="text-[2rem] font-bold">WHY US</h1>
        <p className="text-[0.8rem] w-[45rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <img src={whyUsImg} alt="" className="absolute top-[10rem] w-[20rem]" />
      <div className="absolute top-[17rem] right-[15rem]">
        <div className="flex gap-5">
          <div className="bg-[#BBB] text-black px-9 py-11 flex flex-col justify-center items-center gap-3 rounded-3xl ">
            <MdOutlineVerifiedUser size={"3em"}/>
            <p className="font-semibold">Trustyworthy</p>
          </div>
          <div className="bg-[#BBB] text-black px-9 py-11 flex flex-col justify-center items-center gap-3 rounded-3xl ">
            <RiToolsLine size={"3em"}/>
            <p className="font-semibold">Trustyworthy</p>
          </div>
          <div className="bg-[#BBB] text-black px-9 py-11 flex flex-col justify-center items-center gap-3 rounded-3xl ">
            <Ri24HoursFill size={"3em"}/>
            <p className="font-semibold">Trustyworthy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
