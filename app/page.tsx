import React from "react";
import "./globals.css";

const Home = () => {
  return (
    <div className="flex h-screen text-white">
      {/* Left Team */}
      <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-700">
        <h2 className="text-2xl font-bold mb-4">ATTACKERS</h2>
        <ul>
          {["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"].map((player, index) => (
            <li key={index} className="mb-2">
              {player}
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Buttons */}
      <div className="w-1/2 flex flex-col items-center bg-[url(/Haven.png)] bg-cover bg-center"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black, transparent)',
          maskRepeat: 'no-repeat',
        }}
      >
        <div className="flex space-x-5 mt-8">
          <button className="bg-buttonmidBg hover:bg-buttonmidHover text-defaulttext text-3xl py-5 px-5 rounded-2xl flex-1">
            Randomize Agents
          </button>
          <button className="bg-buttonmidBg hover:bg-buttonmidHover text-defaulttext text-3xl py-5 px-5 rounded-2xl flex-1">
            Random Map
          </button>
        </div>
        <button className="mt-5 bg-buttonmidBg hover:bg-midbuttonHover text-defaulttext py-4 px-4 rounded-2xl">
            Clear
        </button>
      </div>

      {/* Right Team */}
      <div className="w-1/4 flex flex-col items-center justify-center border-l border-gray-700">
        <h2 className="text-2xl font-bold mb-4">DEFENDERS</h2>
        <ul>
          {["Player 6", "Player 7", "Player 8", "Player 9", "Player 10"].map((player, index) => (
            <li key={index} className="mb-2">
              {player}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;