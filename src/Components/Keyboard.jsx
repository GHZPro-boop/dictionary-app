import React, { useState } from "react";
import search from "../assets/images/icon-search.svg";

export const Keyboard = ({ onSearch, isDarkMode }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchInput);
    };

    return (
        <div className={`Group3 ${isDarkMode ? "bg-zinc-950" : "bg-white"} h-12`}>
            <div className={`Rectangle ${isDarkMode ? "bg-stone-900" : "bg-white"} mx-[6.5%] md:mx-[16%] lg:mx-[16.5%] mt-[15%] md:mt-5% lg:mt-[5%] h-12 rounded-2xl`}>
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        value={searchInput}
                        onChange={handleInputChange}
                        placeholder="keyboard"
                        className={`Keyboard ${isDarkMode ? "bg-stone-900 text-white" : "bg-zinc-100"} left-[5px] top-[5px] w-[95%] md:w-[98%] lg:w-[99%] h-9 relative text-zinc-800 text-base md:text-xl font-bold`} />
                    <button>
                        <img className="Shape w-6 h-4 left-[240px] md:left-[490px] lg:left-[850px] relative top-[-15px] rounded-2xl" src={search} />
                    </button>
                </form>
            </div>
        </div>
    );
}