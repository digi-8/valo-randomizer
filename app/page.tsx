'use client';

import React, { useState } from "react";
import "./globals.css";
import Image from "next/image";
import PlayerCard from "@/app/cards";

const Home = () => {
  const maps = ['Abyss', 'Ascent', 'Bind', 'Breeze', 'Fracture', 'Haven', 'Icebox', 'Lotus', 'Pearl', 'Split', 'Sunset'];
  const agents = ['Brimstone', 'Phoenix', 'Sage', 'Sova', 'Viper', 'Cypher', 'Reyna', 'Killjoy', 'Breach', 'Omen', 'Jett', 'Raze', 'Skye', 'Yoru', 'Astra', 'KAYO', 'Chamber', 'Neon', 'Fade', 'Harbor', 'Gekko', 'Deadlock', 'Iso', 'Clove', 'Vyse', 'Tejo'];

  const [randomMap, setRandomMap] = useState<string>("Map");
  const [redAgents, setRedAgents] = useState<string[]>(Array(5).fill("Agent"));
  const [blueAgents, setBlueAgents] = useState<string[]>(Array(5).fill("Agent"));

  const handleRandomizeMapClick = () => {
    const selectedMap = maps[Math.floor(Math.random() * maps.length)];
    setRandomMap(selectedMap);
  };

  const handleAllAgentRandomizeClick = () => {
    const shuffledRedAgents = [...agents].sort(() => 0.5 - Math.random());
    setRedAgents(shuffledRedAgents.slice(0, 5));
    const shuffledBlueAgents = [...agents].sort(() => 0.5 - Math.random());
    setBlueAgents(shuffledBlueAgents.slice(5, 10));
  };

  const handleAllClearClick = () => {
    setRandomMap("Map");
    setRedAgents(Array(5).fill("Agent"));
    setBlueAgents(Array(5).fill("Agent"));
  };

  const handlePlayerAction = (team: string[], setTeam: React.Dispatch<React.SetStateAction<string[]>>, index: number, action: "clear" | "randomize") => {
    const updatedTeam = [...team];
    if (action === "clear") {
      updatedTeam[index] = "Agent";
    } else {
      const availableAgents = agents.filter(agent => !team.includes(agent));
      updatedTeam[index] = availableAgents[Math.floor(Math.random() * availableAgents.length)];
    }
    setTeam(updatedTeam);
  };

  return (
    <div className="relative h-screen text-white">
      {/* Background Image */}
      <Image
        src={`/maps/${randomMap}.png`}
        alt="Map picture"
        fill={true}
        className="absolute object-cover opacity-35 z-[-1]"
      />

      <div className="flex h-full">
        {/* Left */}
        <div className="w-1/4 flex flex-col items-center justify-center">
          {blueAgents.map((agent, index) => (
            <PlayerCard
              key={index}
              agentName={agent}
              onClear={() => handlePlayerAction(blueAgents, setBlueAgents, index, "clear")}
              onRandomize={() => handlePlayerAction(blueAgents, setBlueAgents, index, "randomize")}
            />
          ))}
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

          <div className="flex items-center h-full absolute z-[-1]">
            <h1 className="text-8xl">{randomMap}</h1>
          </div>

          <div className="flex items-end h-full mb-8">
            <button className="bg-neutral-900/30 text-3xl py-5 px-5 rounded-2xl flex-1" onClick={handleAllClearClick}>
              Clear
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/4 flex flex-col items-center justify-center">
          {redAgents.map((agent, index) => (
            <PlayerCard
              key={index}
              agentName={agent}
              onClear={() => handlePlayerAction(redAgents, setRedAgents, index, "clear")}
              onRandomize={() => handlePlayerAction(redAgents, setRedAgents, index, "randomize")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;