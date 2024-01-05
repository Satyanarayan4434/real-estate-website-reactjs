import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const SearchSection = () => {
    const [search, setSearch] = useState('rent');
    return (
        <div className="bg-gray-800 text-white h-[20rem] justify-center flex flex-col">
            <div className="flex items-center gap-3 justify-center mb-11">
                <h1 className="font-semibold text-4xl">SEARCH YOUR DREAM HOME</h1>
                <IoHomeOutline size="3em"/>
            </div>
            <div className="w-[70%] flex gap-5 items-center justify-start mx-auto">
                <button onClick={()=>setSearch('rent')} className={search === 'rent'? 'bg-[#F0F0F0] text-black  px-5 py-2 rounded-t-xl':''}>RENT</button>
                <button onClick={()=>setSearch('buy')} className={search === 'buy'? 'bg-[#F0F0F0] text-black  px-5 py-2 rounded-t-xl':''}>BUY</button>
                <button onClick={()=>setSearch('sell')} className={search === 'sell'? 'bg-[#F0F0F0] text-black  px-5 py-2 rounded-t-xl':''}>SELL</button>
            </div>
            <div className="flex w-[59.1rem] justify-between mx-auto items-center bg-[#F0F0F0] text-black px-20 py-3 rounded-tr-2xl rounded-b-2xl">
                <button className="flex flex-col items-start">
                    <h1 className="font-bold text-[#AF6000]">Location</h1>
                    <div className="flex items-center justify-between w-[9rem]">
                        <p className="text-[#666666]">Select your city</p>
                        <div className="text-[#AF6000]"><GoLocation /></div> 
                    </div>
                </button>
                <div className="w-[2px] h-[2rem] bg-[#AF6000]"></div>
                <button className="flex flex-col items-start">
                    <h1 className="font-bold text-[#AF6000]">Property Type</h1>
                    <div className="flex items-center justify-between w-[12rem]">
                        <p className="text-[#666666]">Choose property type</p> 
                        <div><IoIosArrowDown /></div>
                    </div>
                </button>
                <div className="w-[2px] h-[2rem] bg-[#AF6000]"></div>
                <button className="flex flex-col items-start">
                    <h1 className="font-bold text-[#AF6000]">Price Range</h1>
                    <div className="flex items-center justify-between w-[12rem]">
                        <p className="text-[#666666]">Choose Price Range</p> 
                        <div><IoIosArrowDown /></div>
                    </div>
                </button>
                <button className="bg-[#AF6000] text-white p-3 rounded-xl "><IoSearch size={"1.5rem"}/></button>
            </div>
        </div>
    );
}

export default SearchSection;
