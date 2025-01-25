'use client';

import React, { useState }  from "react";
import "./globals.css";
import Image from "next/image";
import PlayerCard from "@/app/cards";

const Home = () => {
  const maps: string[] = ['Abyss', 'Ascent', 'Bind', 'Breeze', 'Fracture', 'Haven', 'Icebox', 'Lotus', 'Pearl', 'Split', 'Sunset'];
  const [randommap, setRandomMap] = useState<string>("Map");

  const agents: string[] = ['Brimstone', 'Phoenix', 'Sage', 'Sova', 'Viper', 'Cypher', 'Reyna', 'Killjoy', 'Breach', 'Omen', 'Jett', 'Raze', 'Skye', 'Yoru', 'Astra', 'KAYO', 'Chamber', 'Neon', 'Fade', 'Harbor', 'Gekko', 'Deadlock', 'Iso', 'Clove', 'Vyse', 'Tejo'];
  const [randomRedAgents, setRandomRedAgents] = useState<string[]>([]);
  const [randomBlueAgents, setRandomBlueAgents] = useState<string[]>([]);

  const [redAgent1, setRedAgent1] = useState<string>("Agent");
  const [redAgent2, setRedAgent2] = useState<string>("Agent");
  const [redAgent3, setRedAgent3] = useState<string>("Agent");
  const [redAgent4, setRedAgent4] = useState<string>("Agent");
  const [redAgent5, setRedAgent5] = useState<string>("Agent");

  const [blueAgent1, setBlueAgent1] = useState<string>("Agent");
  const [blueAgent2, setBlueAgent2] = useState<string>("Agent");
  const [blueAgent3, setBlueAgent3] = useState<string>("Agent");
  const [blueAgent4, setBlueAgent4] = useState<string>("Agent");
  const [blueAgent5, setBlueAgent5] = useState<string>("Agent");

  
  function handleAllAgentRandomizeClick() {
    console.log("RandomizeAgentsClicked")
    const shuffledRedAgents = [...agents].sort(() => 0.5 - Math.random());
    const redAgents = shuffledRedAgents.slice(0, 5);
    const selectRedAgent1 = shuffledRedAgents[0];
    const selectRedAgent2 = shuffledRedAgents[1];
    const selectRedAgent3 = shuffledRedAgents[2];
    const selectRedAgent4 = shuffledRedAgents[3];
    const selectRedAgent5 = shuffledRedAgents[4];
    setRedAgent1(selectRedAgent1);
    setRedAgent2(selectRedAgent2);
    setRedAgent3(selectRedAgent3);
    setRedAgent4(selectRedAgent4);
    setRedAgent5(selectRedAgent5);
    const shuffledBlueAgents = [...agents].sort(() => 0.5 - Math.random());
    const blueAgents = shuffledBlueAgents.slice(0, 5);
    const selectBlueAgent1 = shuffledBlueAgents[0];
    const selectBlueAgent2 = shuffledBlueAgents[1];
    const selectBlueAgent3 = shuffledBlueAgents[2];
    const selectBlueAgent4 = shuffledBlueAgents[3];
    const selectBlueAgent5 = shuffledBlueAgents[4];
    setBlueAgent1(selectBlueAgent1);
    setBlueAgent2(selectBlueAgent2);
    setBlueAgent3(selectBlueAgent3);
    setBlueAgent4(selectBlueAgent4);
    setBlueAgent5(selectBlueAgent5);
    setRandomRedAgents(redAgents);
    setRandomBlueAgents(blueAgents);
    console.log(randomRedAgents);
    console.log(randomBlueAgents);
  }

  function handleRandomizeMapClick() {
    console.log("RandomizeMapClicked")
    const map = Math.floor(Math.random() * maps.length);
    const selectedMap = maps[map];
    setRandomMap(selectedMap);
    console.log(randommap);
  }

  function handleAllClearClick() {
    console.log("AllClearClicked")
    setRandomMap("Map");
    setRedAgent1("Agent");
    setRedAgent2("Agent");
    setRedAgent3("Agent");
    setRedAgent4("Agent");
    setRedAgent5("Agent");
    setBlueAgent1("Agent");
    setBlueAgent2("Agent");
    setBlueAgent3("Agent");
    setBlueAgent4("Agent");
    setBlueAgent5("Agent");
  }

  const handlePlayerClearClick = (setAgent: React.Dispatch<React.SetStateAction<string>>) => {
    setAgent("Agent");
  };

  const handleBlueRandomizeAgent = (setAgent: React.Dispatch<React.SetStateAction<string>>) => {
    const shuffleAgent = [...agents].sort(() => 0.5 - Math.random());
    const randomBlueAgent = shuffleAgent[0];
    if (randomRedAgents.includes(randomBlueAgent)) {
      handleBlueRandomizeAgent(setAgent);
    } else {
      setAgent(randomBlueAgent);
    }
  };

  const handleRedRandomizeAgent = (setAgent: React.Dispatch<React.SetStateAction<string>>) => {
    const shuffleAgent = [...agents].sort(() => 0.5 - Math.random());
    const randomRedAgent = shuffleAgent[0];
    if (randomBlueAgents.includes(randomRedAgent)) {
      handleBlueRandomizeAgent(setAgent);
    } else {
      setAgent(randomRedAgent);
    }
  };

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
            agentName={blueAgent1}
            onClear={() => handlePlayerClearClick(setBlueAgent1)}
            onRandomize={() => handleBlueRandomizeAgent(setBlueAgent1)}
          />
          <PlayerCard 
            agentName={blueAgent2}
            onClear={() => handlePlayerClearClick(setBlueAgent2)}
            onRandomize={() => handleBlueRandomizeAgent(setBlueAgent2)}
          />
          <PlayerCard 
            agentName={blueAgent3}
            onClear={() => handlePlayerClearClick(setBlueAgent3)}
            onRandomize={() => handleBlueRandomizeAgent(setBlueAgent3)}
          />
          <PlayerCard 
            agentName={blueAgent4}
            onClear={() => handlePlayerClearClick(setBlueAgent4)}
            onRandomize={() => handleBlueRandomizeAgent(setBlueAgent4)}
          />
          <PlayerCard 
            agentName={blueAgent5}
            onClear={() => handlePlayerClearClick(setBlueAgent5)}
            onRandomize={() => handleBlueRandomizeAgent(setBlueAgent5)}
          />
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
          <PlayerCard 
              agentName={redAgent1}
              onClear={() => handlePlayerClearClick(setRedAgent1)}
              onRandomize={() => handleRedRandomizeAgent(setRedAgent1)}
            />
            <PlayerCard 
              agentName={redAgent2}
              onClear={() => handlePlayerClearClick(setRedAgent2)}
              onRandomize={() => handleRedRandomizeAgent(setRedAgent2)}
            />
            <PlayerCard 
              agentName={redAgent3}
              onClear={() => handlePlayerClearClick(setRedAgent3)}
              onRandomize={() => handleRedRandomizeAgent(setRedAgent3)}
            />
            <PlayerCard 
              agentName={redAgent4}
              onClear={() => handlePlayerClearClick(setRedAgent4)}
              onRandomize={() => handleRedRandomizeAgent(setRedAgent4)}
            />
            <PlayerCard 
              agentName={redAgent5}
              onClear={() => handlePlayerClearClick(setRedAgent5)}
              onRandomize={() => handleRedRandomizeAgent(setRedAgent5)}
            />
        </div>
      </div>
    </div>
  );
};

export default Home;
