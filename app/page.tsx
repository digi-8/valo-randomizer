'use client';

import React, { useState }  from "react";
import "./globals.css";
import Image from "next/image";
import PlayerCard from "@/app/cards";

const Home = () => {
  const maps: string[] = ['Abyss', 'Ascent', 'Bind', 'Breeze', 'Fracture', 'Haven', 'Icebox', 'Lotus', 'Pearl', 'Split', 'Sunset'];
  const [randommap, setRandomMap] = useState<string>("");

  const agents: string[] = ['Brimstone', 'Phoenix', 'Sage', 'Sova', 'Viper', 'Cypher', 'Reyna', 'Killjoy', 'Breach', 'Omen', 'Jett', 'Raze', 'Skye', 'Yoru', 'Astra', 'KAY/O', 'Chamber', 'Neon', 'Fade', 'Harbor', 'Gekko', 'Deadlock', 'Iso', 'Clove', 'Vyse', 'Tejo'];
  const [randomagent, setRandomAgent] = useState<string>("");
  
  function handleAllAgentRandomizeClick() {
    const agent = Math.floor(Math.random() * maps.length);
    const selectedAgent = agents[agent];
    setRandomMap(selectedAgent);
    console.log(randomagent);
  }

  function handleRandomizeMapClick() {
    const map = Math.floor(Math.random() * maps.length);
    const selectedMap = maps[map];
    setRandomMap(selectedMap);
    console.log(randommap);
  }

  function handleAllClearClick() {
    console.log("AllClearClick")
  }

  function handlePlayerRandomizeClick() {
    console.log("PlayerRandomizeClick")
  }

  function handlePlayerClearClick() {
    console.log("PlayerClearClick")
  }

  return (
    <div className="relative h-screen text-white">
      {/* Background Image */}
      <Image
        src={`/maps/${randommap}.png`}
        alt="Map picture"
        fill={true}
        className="absolute object-cover opacity-35 z-[-1]"
      />

      <div className="flex h-full">
        {/* Left */}
        <div className="w-1/4 flex flex-col items-center justify-center">
          <PlayerCard
            playername = ""
            agentname = `{selectedAgent}` 
          />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </div>

        {/* Middle */}
        <div className="w-1/2 flex flex-col items-center relative">

          <div className="flex justify-center space-x-5 mt-8">
            <button className="bg-neutral-700/30 text-3xl py-5 px-5 rounded-2xl flex-1" onClick={handleAllAgentRandomizeClick}>
              Randomize Agents
            </button>
            <button className="bg-neutral-700/30 text-3xl py-5 px-5 rounded-2xl flex-1" onClick={handleRandomizeMapClick}>
              Random Map
            </button>
          </div>

          <div className="flex items-center h-full absolute">
            <h1 className="text-8xl">{ randommap }</h1>
          </div>

          <div className="flex items-end h-full mb-8">
            <button className="bg-neutral-900/30 text-3xl py-5 px-5 rounded-2xl flex-1" onClick={handleAllClearClick}>
              Clear
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/4 flex flex-col items-center justify-center">
          <h2 className="text-2xl mb-4">DEFENDERS</h2>
          <ul>
            {["Player 6", "Player 7", "Player 8", "Player 9", "Player 10"].map(
              (player, index) => (
                <li key={index} className="mb-2">
                  {player}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
