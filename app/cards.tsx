import React from "react";
import "./globals.css";

export default function PlayerCard (playername, agent) {
    return (
        <div className="h-[183px] p-4 bg-white/10 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-blur flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-20 h-20 rounded-lg justify-center items-center flex overflow-hidden">
                    <img className="w-20 h-20" src="/icons/${}.png" />
                </div>
                <div className="w-[201px] flex-col justify-start items-start inline-flex">
                    <div className="text-white text-2xl font-normal font-['Anton'] tracking-tight">Player Name</div>
                    <div className="text-white text-[42px] font-normal font-['Anton'] uppercase tracking-tight">Agent Name</div>
                </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-9 px-4 py-2 bg-[#56ffef]/60 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] justify-center items-center gap-2.5 flex">
                    <div className="w-[86px] self-stretch text-center text-white text-xl font-normal font-['Anton'] leading-tight tracking-tight">RANDOMIZE</div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-4 py-2 bg-[#56ffef]/60 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] justify-center items-center gap-2.5 flex">
                    <div className="w-[86px] self-stretch text-center text-white text-xl font-normal font-['Anton'] leading-tight tracking-tight">CLEAR</div>
                </div>
            </div>
        </div>
    )
}
