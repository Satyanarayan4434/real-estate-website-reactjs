import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";

const SearchSection = () => {
    const [search, setSearch] = useState('');
    return (
        <div className="bg-gray-800 text-white h-[20rem] justify-center flex flex-col gap-12">
            <div className="flex items-center gap-3 justify-center">
                <h1 className="font-semibold text-4xl">SEARCH YOUR DREAM HOME</h1>
                <IoHomeOutline size="3em"/>
            </div>
            <div className="w-[70%] flex gap-5 items-center justify-start mx-auto">
                <button onClick={()=>setSearch('rent')} className={search === 'rent'? 'bg-[#8F90A6] text-black  px-5 py-2 rounded-t-xl':''}>RENT</button>
                <button onClick={()=>setSearch('buy')} className={search === 'buy'? 'bg-[#8F90A6] text-black  px-5 py-2 rounded-t-xl':''}>BUY</button>
                <button onClick={()=>setSearch('sell')} className={search === 'sell'? 'bg-[#8F90A6] text-black  px-5 py-2 rounded-t-xl':''}>SELL</button>
            </div>
        </div>
    );
}

export default SearchSection;
