'use client';

import React, { useEffect, useState } from "react";
import "./globals.css";
import Image from "next/image";
import PlayerCard from "@/app/cards";
import axios from "axios";
import { AgentInfo, MapInfo } from "./Models";
import { Agent } from "http";
import { getDisplayName } from "next/dist/shared/lib/utils";


const Home = () => {
 

  const [randomMap, setRandomMap] = useState<string>("G-g-g-g-give me a corpse");
  const [optionalMap, setOptionalMap] = useState<string>("maps");


  const [serverUrl, setServerUrl] = useState('https://valorant-api.com/v1/');
  const [agents, setAgents] = useState<AgentInfo[]>([]);
  const [maps, setMaps] = useState<string[]>([]);
    useEffect(() => {
      const agentURL=`${serverUrl}agents`
      const mapURL=`${serverUrl}maps`
      axios.get (agentURL)
        .then(res => {
          const agents = res.data.data as AgentInfo[];
         setAgents (agents);
        })
      axios.get (mapURL)
        .then(res => {
          const maps = res.data.data as MapInfo[];
           (maps);
        })
      setMaps(['Abyss', 'Ascent', 'Bind', 'Breeze', 'Fracture', 'Haven', 'Icebox', 'Lotus', 'Pearl', 'Split', 'Sunset']);
    }, [serverUrl] 
  )



  const [redAgents, setRedAgents] = useState<AgentInfo[]>(Array(5).fill({getDisplayName:"Agent"}));
  const [blueAgents, setBlueAgents] = useState<AgentInfo[]>(Array(5).fill({displayName:"Agent"}));

  const handleRandomizeMapClick = () => {
    const viableMaps = maps.filter((map) => map !== randomMap);
    const selectedMap = viableMaps[Math.floor(Math.random() * viableMaps.length)];
    const randomChance = Math.floor(Math.random() * 10) + 1;
    if (randomChance === 1) {
      setOptionalMap("amogus");
    } else {
      setOptionalMap("maps");
    }
    setRandomMap(selectedMap);
    console.log(selectedMap, optionalMap);
  };

  const handleAllAgentRandomizeClick = () => {
    const shuffledRedAgents = [...agents].sort(() => 0.5 - Math.random());
    setRedAgents(shuffledRedAgents.slice(0, 5));
    const shuffledBlueAgents = [...agents].sort(() => 0.5 - Math.random());
    setBlueAgents(shuffledBlueAgents.slice(5, 10));
  };

  const handleAllClearClick = () => {
    setRandomMap("WE GO AGANE");
    setRedAgents(Array(5).fill({displayName:"Agent",displayIconSmall:""}));
    setBlueAgents(Array(5).fill({displayName:"Agent",displayIconSmall:""}));
  };

  const handlePlayerAction = (team: AgentInfo[], setTeam: React.Dispatch<React.SetStateAction<AgentInfo[]>>, index: number, action: "clear" | "randomize") => {
    const updatedTeam = [...team];
    if (action === "clear") {
      updatedTeam[index] = {displayName:"Agent",displayIconSmall:""};
    } else {
      const randomChance = Math.floor(Math.random() * 20) + 1;
        if (randomChance === 1) {
          updatedTeam[index] = {displayName:"Really",displayIconSmall:""};
        } else {
          const availableAgents = agents.filter(agent => !team.includes(agent));
          updatedTeam[index] = availableAgents[Math.floor(Math.random() * availableAgents.length)];
        }
    }
    setTeam(updatedTeam);
  };

  return (
    <div className="relative h-screen text-white">
      {/* Background Image */}
      <Image
        src={`/${optionalMap}/${randomMap}.png`}
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
              agent={agent}
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
              agent={agent}
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