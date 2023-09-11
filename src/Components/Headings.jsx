import React, { useRef } from "react";
import play from "../assets/images/icon-play.svg";

export const Headings = ({ isDarkMode, word, phonetic, audioUrl, selectedFont }) => {

    const ref = useRef();
    const playAudio = () => {
        ref.current.play();
    };
    return (
        <div>
            <div className={`Group7 flex justify-between mt-5 items-center`}>
                <div className={`Group5 w-36 h-16 pr-0.5 flex-col justify-center items-start gap-2 inline-flex`}>
                    <div
                        className={`Keyboard ${isDarkMode ? "bg-zinc-950 text-white" : "bg-white text-zinc-800"} ml-[20px] md:ml-[123px] lg:ml-[220px] md:mt-8 lg:mt-10 text-3xl md:text-6xl lg:text-6xl font-bold`}
                        style={{ fontFamily: selectedFont }}
                    >{word}</div>
                    <div
                        className="KiBD w-56 text-purple-500 ml-[20px] md:ml-[123px] lg:ml-[220px] md:mt-5 lg:mt-5 text-lg md:text-2xl lg:text-2xl font-normal leading-normal"
                        style={{ fontFamily: selectedFont }}
                    >{phonetic}</div>
                </div>
                <button onClick={playAudio} className="Group4 w-12 md:w-20 lg:w-20 h-12 md:h-20 lg:h-20 mr-[20px] md:mr-[125px] lg:mr-[230px] mt-4">
                    <img src={play} alt="play-button" className="Oval w-12 md:w-20 lg:w-20 h-12 md:h-20 lg:h-20" />
                </button>
                <audio className="hidden" ref={ref} src={audioUrl} />
            </div>
        </div>
    )
}