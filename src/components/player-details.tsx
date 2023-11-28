"use Client";
import usePlayer from "@/hooks/usePlayer";

import React from "react";

export default function PlayerDetails() {
  const { selectedPlayer } = usePlayer();

  return (
    <div className="w-1/4 bg-Appbackground flex flex-col gap-2">
      <div
        className=" h-1/2 bg-contain bg-no-repeat bg-center flex flex-col justify-between p-4"
        style={{ backgroundImage: `url(${selectedPlayer?.playerImage})` }}
      >
        <div className="text-Appprimary relative">
          <span className="text-xl aboslute ">
            {" "}
            {selectedPlayer?.jerseyNumber}
          </span>
          <span className="text-6xl  font-medium ">
            {" "}
            {selectedPlayer?.jerseyNumber}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl ">{selectedPlayer?.playerName}</span>
          <span className="text-xs text-Appprimary">
            {selectedPlayer?.position}
          </span>
        </div>
      </div>
      <div className="h-1/2">
        <div className="h-1/3 flex justify-around text-[10px]">
          <div>
            <span className="flex flex-col gap-1">Height</span>
            <span className="text-sm">{`${
              Number(selectedPlayer?.height) / 10
            } m `}</span>
          </div>
          <div>
            <span className="flex flex-col gap-2">Weight</span>
            <span className="text-sm">{`${Number(
              selectedPlayer?.weight
            )} kg `}</span>
          </div>
          <div>
            <span className="flex flex-col gap-2 text-">Nationality</span>
            <div className="flex gap-1 items-center text-sm">
              <img
                className="w-5 h-5"
                src={selectedPlayer?.flagImage}
                alt="flag"
              />
              <span>{selectedPlayer?.nationality}</span>
            </div>
          </div>
        </div>
        <div className="h-2/3 grid grid-cols-2 gap-2 px-5 text-xs">
          <div className="flex flex-col gap-1">
            <span className="text-Appprimary text-lg">
              {selectedPlayer?.appearances}
            </span>
            <span>Appearances</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-Appprimary text-lg">
              {selectedPlayer?.minutesPlayed}
            </span>
            <span>Minutes Played</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-Appprimary text-lg">
              {selectedPlayer?.cleanSheets}
            </span>
            <span>Clean sheets</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-Appprimary text-lg">
              {selectedPlayer?.saves}
            </span>
            <span>Saves</span>
          </div>
        </div>
      </div>
    </div>
  );
}
