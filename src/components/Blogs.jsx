import { HiOutlineHomeModern } from "react-icons/hi2";
import blogImgOne from "../assets/blogImg-1.svg";
import blogImgTwo from "../assets/blogImg-2.svg";
import blogImgThree from "../assets/blogImg-3.svg";
import blogImgFour from "../assets/blogImg-4.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
const Blogs = () => {
  return (
    <div className="py-36 flex flex-col gap-[4rem] mx-auto items-center justify-center bg-gray-800">
      <div className="flex items-center gap-5 text-white font-semibold text-4xl">
        <h1>RECENT BLOGS</h1>
        <HiOutlineHomeModern />
      </div>
      <div className="flex flex-col gap-10">
        <div className=" flex gap-11">
          <div className="w-[500px] flex flex-col gap-5">
            <img src={blogImgOne} alt="" />
            <p className="font-normal text-sm text-[#F9BF78]">
              Sunday, 1 Jan 2023
            </p>
            <div className="flex justify-between items-end">
              <a className="font-bold text-xl text-white">
                UX review presentations
              </a>
              <IoIosArrowRoundForward
                size={"1.5em"}
                className="-rotate-45 text-white"
              />
            </div>
            <p className="text-sm text-white">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex gap-6">
              <p className="bg-white px-2 py-1 rounded-3xl text-[#3538CD] text-sm">
                Design
              </p>
              <p className="bg-white px-2 py-1 rounded-3xl text-[#3538CD] text-sm">
                Research
              </p>
              <p className="bg-white px-2 py-1 rounded-3xl text-[#3538CD] text-sm">
                Presentation
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="w-[600px] flex gap-5 items-start justify-start">
              <img src={blogImgTwo} alt="" className="w-[25rem]"/>
              <div className="flex flex-col gap-2">
                <p className="font-normal text-sm text-[#F9BF78]">
                  Sunday, 1 Jan 2023
                </p>
                <a className="font-bold text-xl text-white">
                  UX review presentations
                </a>
                <p className="text-sm text-white">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </p>
                <div className="flex gap-6">
                  <p className="bg-white px-2 py-1 rounded-3xl text-[#3538CD] text-sm">
                    Design
                  </p>
                  <p className="bg-white px-2 py-1 rounded-3xl text-[#3538CD] text-sm">
                    Research
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[600px] flex gap-5 items-start justify-start">
              <img src={blogImgThree} alt="" className="w-[25rem]"/>
              <div className="flex flex-col gap-2">
                <p className="font-normal text-sm text-[#F9BF78]">
                  Sunday, 1 Jan 2023
                </p>
                <a className="font-bold text-xl text-white">
                  UX review presentations
                </a>
                <p className="text-sm text-white">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </p>
                <div className="flex gap-6">
                  <p className="bg-white px-2 py-1 rounded-3xl text-[#3538CD] text-sm">
                    Design
                  </p>
                  <p className="bg-white px-2 py-1 rounded-3xl text-[#3538CD] text-sm">
                    Research
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[1080px] flex  gap-5">
            <img src={blogImgFour} alt="" className="h-[15rem]"/>
            <div className="flex flex-col gap-5">
            <p className="font-normal text-sm text-[#F9BF78]">
              Sunday, 1 Jan 2023
            </p>
            <div className="flex justify-between items-end">
              <a className="font-bold text-xl text-white">
                UX review presentations
              </a>
              <IoIosArrowRoundForward
                size={"1.5em"}
                className="-rotate-45 text-white"
              />
            </div>
            <p className="text-sm text-white">
                A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
            </p>
            <div className="flex gap-6">
              <p className="bg-white px-2 py-1 rounded-3xl text-[#3538CD] text-sm">
                Design
              </p>
              <p className="bg-white px-2 py-1 rounded-3xl text-[#3538CD] text-sm">
                Research
              </p>
              <p className="bg-white px-2 py-1 rounded-3xl text-[#3538CD] text-sm">
                Presentation
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
