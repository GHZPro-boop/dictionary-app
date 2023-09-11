import React from "react";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";

export const Header = ({ toggleDarkMode, isDarkMode, selectedFont, onFontChange }) => {

    const toggleStyle = {
        transform: isDarkMode ? "translateX(100%)" : "translateX(0)",
    };

    return (
        <div className={`Group4 flex justify-between ${isDarkMode ? "bg-zinc-950" : "bg-white"} px-[5%] md:px-[16%] pt-[24px]`}>
            <div className="IconoirBook">
                <img className="Shape w-7 md:w-8 lg:w-8 h-8 md:h-9 lg:h-9" src={logo} />
            </div>
            <div className={`Group2 flex gap-5 items-center`}>
                <div className={`Group13`}>
                    <div className={`SansSerif text-right text-zinc-800 text-sm md:text-lg lg:text-lg font-bold leading-normal`}>
                        <select
                            className={`${isDarkMode ? "bg-zinc-950 text-white" : "bg-white text-zinc-800"}`}
                            value={selectedFont}
                            onChange={onFontChange}
                        >
                            <option value="sans-serif">Sans Serif</option>
                            <option value="serif">Serif</option>
                            <option value="monospace">Monospace</option>
                        </select>
                    </div>
                </div>
                <div className={`Group flex ${isDarkMode ? "bg-zinc-950" : "bg-white"} gap-5 items-center`}>
                    <div className={`Group8 ${isDarkMode ? "bg-zinc-950" : "bg-white"} w-10 h-5`} onClick={toggleDarkMode}>
                        <div className={`Rectangle ${isDarkMode ? "bg-purple-500" : "bg-neutral-500"} w-10 h-5 rounded-lg`} />
                        <div className="Oval w-3.5 h-3.5 relative top-[-12px] left-2 bg-white rounded-full" style={toggleStyle} />
                    </div>
                    <img src={moon} alt="moon icon" className={`Rectangle ${isDarkMode ? "bg-zinc-950" : "bg-white"} w-7 h-6`} />
                </div>
            </div>
        </div>
    );
}