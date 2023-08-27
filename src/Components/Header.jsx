import React from "react";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";

export const Header = ({ toggleDarkMode, isDarkMode }) => {

    const toggleStyle = {
        transform: isDarkMode ? "translateX(100%)" : "translateX(0)",
    };

    return (
        <div className={`Group4 flex ${isDarkMode ? "bg-zinc-950" : "bg-white"} w-80 h-8 pl-[24px] pt-[24px]`}>
            <div className="IconoirBook w-7 md:w-8 lg:w-8 h-8 md:h-9 lg:h-12">
                <img className="Shape w-7 md:w-8 lg:w-8 h-8 md:h-9 lg:h-9 md:ml-[100px] lg:ml-[200px]" src={logo} />
            </div>
            <div className={`Group2 flex w-52 md:w-64 lg:w-96 h-8`}>
                <div className={`Group13 w-24 md:w-28 lg:w-28 h-6 pl-[140px] md:pl-[400px] lg:pl-[900px] mt-[4px] justify-center items-center gap-4 inline-flex`}>
                    <div className={`SansSerif text-right text-zinc-800 text-sm md:text-lg lg:text-lg font-bold leading-normal`}>
                        <select className={`${isDarkMode ? "bg-zinc-950 text-white" : "bg-white"}`}>
                            <option value="sans serif">Sans Serif</option>
                            <option value="serif">Serif</option>
                            <option value="monospace">Monospace</option>
                        </select>
                    </div>
                </div>
                <div className={`Group flex ${isDarkMode ? "bg-zinc-950" : "bg-white"} mt-2 w-16 md:w-20 lg:w-24 h-5 ml-[50px] md:ml-[100px] lg:ml-[100px] items-center`}>
                    <div className={`Group8 ${isDarkMode ? "bg-zinc-950" : "bg-white"} w-10 h-5`} onClick={toggleDarkMode}>
                        <div className={`Rectangle ${isDarkMode ? "bg-purple-500" : "bg-neutral-500"} w-10 h-5 rounded-lg`} />
                        <div className="Oval w-3.5 h-3.5 relative top-[-12px] left-2 bg-white rounded-full" style={toggleStyle} />
                    </div>
                    <img src={moon} alt="moon icon" className={`Rectangle ${isDarkMode ? "bg-zinc-950" : "bg-white"} left-[20px] md:left-[45px] lg:left-[20px] relative w-7 h-6`} />
                </div>
            </div>
        </div>
    );
}