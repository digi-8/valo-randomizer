import React, { useState } from "react";
import "./globals.css";
import Image from "next/image";
import { AgentInfo } from "./Models";

interface PlayerCardProps {
  agent: AgentInfo;
  onClear: () => void;
  onRandomize: () => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ agent, onClear, onRandomize }) => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="h-[183px] p-4 bg-white/10 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-blur flex-col justify-start items-start gap-4 inline-flex m-2 blueCard">
      <div className="self-stretch justify-start items-start gap-2 inline-flex">
        <div className="w-20 h-20 rounded-lg justify-center items-center flex overflow-hidden">
          <Image
           loader={ ({ }) => {
            return agent.displayIconSmall
          }}
            src={agent.displayIconSmall==undefined ||agent.displayIconSmall==""? "/icons/Agent.png": agent.displayIconSmall}
            alt={`${agent.displayName} picture`}
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
            {agent.displayName}
          </div>
        </div>
      </div>
      <div className="self-stretch justify-start items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 h-9 px-4 py-2 bg-[#56ffef]/60 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] justify-center items-center gap-2.5 flex">
          <button
            className="w-[86px] self-stretch text-center text-white text-xl font-normal font-['Anton'] leading-tight tracking-tight"
            onClick={onRandomize}
          >
            RANDOMIZE
          </button>
        </div>
        <div className="grow shrink basis-0 h-9 px-4 py-2 bg-[#56ffef]/60 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] justify-center items-center gap-2.5 flex">
          <button
            className="w-[86px] self-stretch text-center text-white text-xl font-normal font-['Anton'] leading-tight tracking-tight"
            onClick={onClear}
          >
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
