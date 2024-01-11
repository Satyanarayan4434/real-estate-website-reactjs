import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";
import homeOne from "../assets/home-1.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Propertise = () => {
  const [pageNo, setPageNo] = useState(1);
  const nextClickHandler = () => {
    setPageNo(pageNo + 1);
  };
  const previousClickHandler = () => {
    setPageNo(pageNo - 1);
  };

  return (
    <div className="bg-gray-800 pt-[15rem] ">
      <div className="w-[880px] mx-auto flex flex-col justify-center items-center gap-14">
        <div className="flex items-center gap-5 text-white">
          <HiOutlineBuildingOffice2 size={"3em"} />
          <h1 className="font-semibold text-3xl">SOME PROPERTISE TO CHECK</h1>
        </div>
        <div className="flex w-[980px] mx-auto flex-wrap gap-10">
          <div className="w-[300px] flex flex-col gap-2">
            <img src={homeOne} alt="" />
            <p className="text-[#F9BF78]">Sunday, 1 Jan 2023</p>
            <div className="flex  items-end gap-1 text-white">
              <h1 className="font-semibold text-xl">
                Bill Walsh leadership lessons
              </h1>
              <IoIosArrowRoundForward size={"1.5em"} className="-rotate-45" />
            </div>
            <p className="text-white font-light text-sm">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex  items-center gap-2">
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                LeaderShip
              </p>
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                Management
              </p>
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                Presentation
              </p>
            </div>
          </div>
          <div className="w-[300px] flex flex-col gap-2">
            <img src={homeOne} alt="" />
            <p className="text-[#F9BF78]">Sunday, 1 Jan 2023</p>
            <div className="flex  items-end gap-1 text-white">
              <h1 className="font-semibold text-xl">
                Bill Walsh leadership lessons
              </h1>
              <IoIosArrowRoundForward size={"1.5em"} className="-rotate-45" />
            </div>
            <p className="text-white font-light text-sm">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex  items-center gap-2">
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                LeaderShip
              </p>
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                Management
              </p>
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                Presentation
              </p>
            </div>
          </div>
          <div className="w-[300px] flex flex-col gap-2">
            <img src={homeOne} alt="" />
            <p className="text-[#F9BF78]">Sunday, 1 Jan 2023</p>
            <div className="flex  items-end gap-1 text-white">
              <h1 className="font-semibold text-xl">
                Bill Walsh leadership lessons
              </h1>
              <IoIosArrowRoundForward size={"1.5em"} className="-rotate-45" />
            </div>
            <p className="text-white font-light text-sm">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex  items-center gap-2">
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                LeaderShip
              </p>
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                Management
              </p>
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                Presentation
              </p>
            </div>
          </div>
          <div className="w-[300px] flex flex-col gap-2">
            <img src={homeOne} alt="" />
            <p className="text-[#F9BF78]">Sunday, 1 Jan 2023</p>
            <div className="flex  items-end gap-1 text-white">
              <h1 className="font-semibold text-xl">
                Bill Walsh leadership lessons
              </h1>
              <IoIosArrowRoundForward size={"1.5em"} className="-rotate-45" />
            </div>
            <p className="text-white font-light text-sm">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex  items-center gap-2">
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                LeaderShip
              </p>
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                Management
              </p>
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                Presentation
              </p>
            </div>
          </div>
          <div className="w-[300px] flex flex-col gap-2">
            <img src={homeOne} alt="" />
            <p className="text-[#F9BF78]">Sunday, 1 Jan 2023</p>
            <div className="flex  items-end gap-1 text-white">
              <h1 className="font-semibold text-xl">
                Bill Walsh leadership lessons
              </h1>
              <IoIosArrowRoundForward size={"1.5em"} className="-rotate-45" />
            </div>
            <p className="text-white font-light text-sm">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex  items-center gap-2">
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                LeaderShip
              </p>
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                Management
              </p>
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                Presentation
              </p>
            </div>
          </div>
          <div className="w-[300px] flex flex-col gap-2">
            <img src={homeOne} alt="" />
            <p className="text-[#F9BF78]">Sunday, 1 Jan 2023</p>
            <div className="flex  items-end gap-1 text-white">
              <h1 className="font-semibold text-xl">
                Bill Walsh leadership lessons
              </h1>
              <IoIosArrowRoundForward size={"1.5em"} className="-rotate-45" />
            </div>
            <p className="text-white font-light text-sm">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex  items-center gap-2">
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                LeaderShip
              </p>
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                Management
              </p>
              <p className="bg-white rounded-3xl px-2 py-1 text-[#F9BF78] font-light text-sm">
                Presentation
              </p>
            </div>
          </div>
          <div className="w-full bg-slate-500 h-[1px]"></div>
          <div className="flex items-center justify-between w-full text-white">
            {pageNo !== 1 && (
              <button onClick={previousClickHandler} className="flex items-end">
                <IoIosArrowRoundForward size={"1.5em"} className="rotate-180" />
                Previous
              </button>
            )}
            <nav>
              <ul className="flex items-center gap-5">
                <NavLink
                  onClick={() => {
                    setPageNo(1);
                  }}
                  className={
                    pageNo === 1
                      ? "bg-white text-black px-3 py-1 rounded-full"
                      : "bg-transparent text-white"
                  }
                >
                  1
                </NavLink>
                <NavLink
                  onClick={() => {
                    setPageNo(2);
                  }}
                  className={
                    pageNo === 2
                      ? "bg-white text-black px-3 py-1 rounded-full"
                      : "bg-transparent text-white"
                  }
                >
                  2
                </NavLink>
                <NavLink
                  onClick={() => {
                    setPageNo(3);
                  }}
                  className={
                    pageNo === 3
                      ? "bg-white text-black px-3 py-1 rounded-full"
                      : "bg-transparent text-white"
                  }
                >
                  3
                </NavLink>
                <p>...</p>
                <NavLink
                  onClick={() => {
                    setPageNo(8);
                  }}
                  className={
                    pageNo === 8
                      ? "bg-white text-black px-3 py-1 rounded-full"
                      : "bg-transparent text-white"
                  }
                >
                  8
                </NavLink>
                <NavLink
                  onClick={() => {
                    setPageNo(9);
                  }}
                  className={
                    pageNo === 9
                      ? "bg-white text-black px-3 py-1 rounded-full"
                      : "bg-transparent text-white"
                  }
                >
                  9
                </NavLink>
                <NavLink
                  onClick={() => {
                    setPageNo(10);
                  }}
                  className={
                    pageNo === 10
                      ? "bg-white text-black px-3 py-1 rounded-full"
                      : "bg-transparent text-white"
                  }
                >
                  10
                </NavLink>
              </ul>
            </nav>
            {pageNo !== 10 && (
              <button onClick={nextClickHandler} className="flex items-end">
                Next
                <IoIosArrowRoundForward size={"1.5em"} className="" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propertise;
