import React, { useState } from "react";
import "./globals.css";
import Image from "next/image";

interface PlayerCardProps {
  agentName: string;
}
function handleClearAgent () {
}

const PlayerCard: React.FC<PlayerCardProps> = ({ agentName }) => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="h-[183px] p-4 bg-white/10 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-blur flex-col justify-start items-start gap-4 inline-flex m-5">
      <div className="self-stretch justify-start items-start gap-2 inline-flex">
        <div className="w-20 h-20 rounded-lg justify-center items-center flex overflow-hidden">
          <Image
            src={`/icons/${agentName}.png`}
            alt={`${agentName} picture`}
            width={80}
            height={80}
          />
        </div>
        <div className="w-[201px] flex-col justify-start items-start inline-flex">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Player Name"
            className="text-white text-2xl font-normal font-['Anton'] tracking-tight bg-transparent border-none outline-none placeholder-gray-400"
          />
          <div className="text-white text-[42px] font-normal font-['Anton'] uppercase tracking-tight">
            {agentName}
          </div>
        </div>
      </div>
      <div className="self-stretch justify-start items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 h-9 px-4 py-2 bg-[#56ffef]/60 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] justify-center items-center gap-2.5 flex">
          <button className="w-[86px] self-stretch text-center text-white text-xl font-normal font-['Anton'] leading-tight tracking-tight" onClick={handleClearAgent}>
            RANDOMIZE
          </button>
        </div>
        <div className="grow shrink basis-0 self-stretch px-4 py-2 bg-[#56ffef]/60 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] justify-center items-center gap-2.5 flex">
          <div className="w-[86px] self-stretch text-center text-white text-xl font-normal font-['Anton'] leading-tight tracking-tight">
            CLEAR
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
