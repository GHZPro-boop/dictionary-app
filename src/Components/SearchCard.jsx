import React from "react";
import new_window from "../assets/images/icon-new-window.svg";

export const SearchCard = ({ partOfSpeech, definitions, synonyms, sourceUrls, isDarkMode, selectedFont }) => {

    return (
        <div>
            <div>
                <div>
                    <div className={`Group6 ${isDarkMode ? "bg-zinc-950" : "bg-white"} px-[0.2%] lg:h-7 mt-[5%] justify-center items-center gap-4 flex`}>
                        <div
                            className={`Noun ${isDarkMode ? "text-white" : "text-zinc-800"} ml-[20px] md:ml-[120px] lg:ml-[220px] text-lg md:text-2xl lg:text-2xl font-bold`}
                            style={{ fontFamily: selectedFont }}>
                            <i>{partOfSpeech}</i>
                        </div>
                        <hr className="w-full mr-[4%] md:mr-[14%] lg:mr-[16%] items-center h-px bg-gray-200" />
                    </div>
                    <div
                        className={`Meaning mt-[2%] ml-[20px] md:ml-[120px] lg:ml-[220px] text-neutral-500 text-base md:text-xl lg:text-xl font-normal`}
                        style={{ fontFamily: selectedFont }}>
                        Meaning
                    </div>
                    {definitions.map((def, index) => (
                        <div key={index}>
                            <ul className="list-disc text-indigo-500 px-10 md:px-[20%] lg:px-[20%] my-4">
                                <li className={`${isDarkMode ? "text-white" : "text-zinc-800"} text-base md:text-lg lg:text-lg font-normal`}
                                    style={{ fontFamily: selectedFont }}>
                                    {def.definition}
                                </li>
                            </ul>
                        </div>
                    ))}

                </div>
                {
                    synonyms.length > 0 && <div className="Group9 pl-[20px] md:ml-[120px] lg:ml-[220px] pr-[5px] lg:pr-[310px] pb-px mt-[15%] md:mt-[5%] lg:mt-[5%] items-start gap-6 flex flex-wrap">
                        <div
                            className="Synonyms text-neutral-500 text-base md:text-xl lg:text-xl font-normal"
                            style={{ fontFamily: selectedFont }}>
                            Synonyms:
                        </div>
                        {synonyms.map((synonym, index) => (
                            <span key={index}
                                className="ElectronicKeyboard text-purple-500 text-base md:text-xl lg:text-xl font-bold"
                                style={{ fontFamily: selectedFont }}
                            >{synonym}</span>
                        ))}
                    </div>
                }
                {
                    sourceUrls && <div className="Group17 flex flex-col md:flex-row lg:flex-row mt-[15%] md:mt-[8%] lg:mt-[8%] ml-[20px] md:ml-[120px] lg:ml-[220px] gap-5 w-72 md:w-[500px] lg:w-[800px] h-20">
                        <div className="Source text-neutral-500 text-sm font-normal underline"
                            style={{ fontFamily: selectedFont }}
                        >Source</div>
                        {sourceUrls.map((source, index) => (
                            <div key={index} className="flex gap-5">
                                <div className={`HttpsEnWiktionar ${isDarkMode ? "text-white" : "text-zinc-800"} text-sm font-normal underline`}
                                    style={{ fontFamily: selectedFont }}>
                                    {source}
                                </div>
                                <img className="Shape w-3 h-3" src={new_window} />
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div >
    );
}