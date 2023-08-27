import React from "react";
import play from "../assets/images/icon-play.svg";
import new_window from "../assets/images/icon-new-window.svg";

export const SearchCard = ({ searchResult, isDarkMode }) => {

    if (!searchResult) {
        return null; // Render nothing if no search result
    }

    const { word, phonetics, meanings, sourceUrls } = searchResult[0]; // Assuming the API response structure

    return (
        <div>
            <div className={`Group7 flex justify-between mt-5 items-center`}>
                <div className={`Group5 w-36 h-16 pr-0.5 flex-col justify-center items-start gap-2 inline-flex`}>
                    <div className={`Keyboard ${isDarkMode ? "bg-zinc-950 text-white" : "bg-white text-zinc-800"} ml-[20px] md:ml-[123px] lg:ml-[220px] md:mt-8 lg:mt-10 text-3xl md:text-6xl lg:text-6xl font-bold`}>{word}</div>
                    <div className="KiBD w-56 text-purple-500 ml-[20px] md:ml-[123px] lg:ml-[220px] md:mt-5 lg:mt-5 text-lg md:text-2xl lg:text-2xl font-normal leading-normal">{phonetics[0].text}</div>
                </div>
                <div className="Group4 w-12 md:w-20 lg:w-20 h-12 md:h-20 lg:h-20 mr-[20px] md:mr-[125px] lg:mr-[230px] mt-4">
                    <img src={play} alt="play-button" className="Oval w-12 md:w-20 lg:w-20 h-12 md:h-20 lg:h-20" />
                </div>
            </div>
            <div>
                <div>
                    <div className={`Group6 ${isDarkMode ? "bg-zinc-950" : "bg-white"} w-[295px] md:w-[650px] lg:w-[83%] lg:h-7 mt-[5%] justify-center items-center gap-4 flex`}>
                        <div className={`Noun ${isDarkMode ? "text-white" : "text-zinc-800"} ml-[20px] md:ml-[120px] lg:ml-[220px] text-lg md:text-2xl lg:text-2xl font-bold`}>
                            <i>{meanings[0].partOfSpeech}</i>
                        </div>
                        <div className="Rectangle w-[100%] md:w-[100%] lg:w-[100%] md:mt-2 lg:mt-2 h-px bg-gray-200" />
                    </div>
                    <div className={`Meaning mt-[2%] ml-[20px] md:ml-[120px] lg:ml-[220px] text-neutral-500 text-base md:text-xl lg:text-xl font-normal`}>
                        Meaning
                    </div>
                    <div className={`Group12 mt-5 md:mt-4 lg:mt-8 h-2 flex ml-[20px] md:ml-[120px] lg:ml-[220px]`}>
                        <div className="Group10 w-[300px] md:w-[700px] lg:w-[800px] h-12 ml-0 md:ml-10 lg:ml-10 flex gap-5">
                            <div className="Oval mt-3 md:mt-3 lg:mt-3 w-1 h-1 bg-purple-600 rounded-full" />
                            <div className={`EtcASetOfKeys w-72 md:w-[100%] lg:w-[100%] ${isDarkMode ? "text-white" : "text-zinc-800"} text-base md:text-lg lg:text-lg font-normal leading-normal`}>
                                {meanings[0].definitions[0].definition}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Group9 md:w-[600px] lg:w-[900px] pl-[20px] md:ml-[120px] lg:ml-[220px] pr-[5px] lg:pr-[310px] pb-px mt-[15%] md:mt-[5%] lg:mt-[5%] items-start gap-6 flex">
                    <div className="Synonyms text-neutral-500 text-base md:text-xl lg:text-xl font-normal">
                        Synonyms
                    </div>
                    <div className="ElectronicKeyboard text-purple-500 text-base md:text-xl lg:text-xl font-bold">{meanings[0].synonyms.join(", ")}</div>
                </div>
                <div className={`Group16 w-80 h-44 mt-[5%] md:mt-[3%] lg:mt-[3%] ml-[20px] md:ml-[120px] lg:ml-[220px]`}>
                    <div className="Group6Copy w-[270px] md:w-[530px] lg:w-[370%] h-5 md:h-7 lg:h-7 justify-center items-center gap-5 flex">
                        <div className={`Verb ${isDarkMode ? "text-white" : "text-zinc-800"} text-lg md:text-2xl lg:text-2xl font-bold`}><i>{meanings[1].partOfSpeech}</i></div>
                        <div className="Rectangle w-[100%] md:w-[100%] lg:w-[100%] md:mt-2 lg:mt-2 h-px bg-gray-200" />
                    </div>
                    <div className={`Group15 ${isDarkMode ? "bg-zinc-950" : "bg-white"} flex flex-col w-80 justify-center items-start gap-4`}>
                        <div className="MeaningCopy text-neutral-500 text-base mt-[8%] md:text-xl lg:text-xl font-normal">
                            Meaning
                        </div>
                        <div className="Group14 w-[290px]">
                            <div className="Group10 w-80 md:w-[550px] lg:w-[800px] h-12 md:ml-10 lg:ml-10 justify-center items-center gap-5 flex">
                                <div className="Oval w-1 h-1 bg-purple-600 rounded-full" />
                                <div className={`ToTypeOnACompute w-[100%] md:w-[100%] lg:w-[100%] ${isDarkMode ? "text-white" : "text-zinc-800"} text-base md:text-lg lg:text-lg font-normal leading-normal`}>
                                    {meanings[1].definitions[0].definition}
                                </div>
                            </div>
                            <div className="Group9 w-80 md:w-[500px] lg:w-[310%] mt-[8%] h-12 pl-6 md:ml-10 lg:ml-10 items-center inline-flex">
                                <div className="KeyboardingIsTheP w-72 md:w-[100%] lg:w-[100%] text-neutral-500 text-base md:text-lg lg:text-lg font-normal leading-normal">"
                                    {meanings[0].definitions[1].example}"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Group17 flex flex-col md:flex-row lg:flex-row mt-[15%] md:mt-[8%] lg:mt-[8%] ml-[20px] md:ml-[120px] lg:ml-[220px] gap-5 w-72 md:w-[500px] lg:w-[800px] h-20">
                    <div className="Source text-neutral-500 text-sm font-normal underline">Source</div>
                    <div className="flex gap-5">
                        <div className={`HttpsEnWiktionar ${isDarkMode ? "text-white" : "text-zinc-800"} text-sm font-normal underline`}>
                            {sourceUrls}
                        </div>
                        <img className="Shape w-3 h-3" src={new_window} />
                    </div>
                </div>
            </div>
        </div >
    );
}