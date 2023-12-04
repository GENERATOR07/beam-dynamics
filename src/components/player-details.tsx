"use Client";

import { PlayerInfo } from "@/interfaces/roster-Interface";
import React from "react";
interface PlayerDetailsProps {
  selectedPlayer: PlayerInfo | null;
}
export default function PlayerDetails({ selectedPlayer }: PlayerDetailsProps) {
  return (
    <div className="w-1/4 bg-Appbackground flex flex-col gap-6 h-[541px]">
      {selectedPlayer ? (
        <>
          <div
            className=" h-1/2 bg-contain bg-no-repeat bg-center flex flex-col justify-between p-4"
            style={{ backgroundImage: `url(${selectedPlayer?.playerImage})` }}
          >
            <div className="text-Appprimary relative w-[40px] h-[100px]">
              <span className=" font-[600px] leading-[100px] text-[110px] opacity-25 ">
                {" "}
                {selectedPlayer?.jerseyNumber}
              </span>
              <span className="font-[600px] leading-[62px] text-[42px] absolute top-6 left-4">
                {" "}
                {selectedPlayer?.jerseyNumber}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-medium ">
                {selectedPlayer?.playerName}
              </span>
              <span className="text-lg font-medium text-Appprimary">
                {selectedPlayer?.position}
              </span>
            </div>
          </div>
          <div className="bg-[#494949] h-[1px] mx-4 "></div>
          <div className="h-1/2">
            <div className="h-1/3 flex justify-around text-sm ">
              <div className="flex flex-col gap-2">
                <span className=" text-lightText ">Height</span>
                <span className="">{`${
                  Number(selectedPlayer?.height) / 100
                } m `}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className=" text-lightText">Weight</span>
                <span className="">{`${Number(
                  selectedPlayer?.weight
                )} kg `}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="  text-lightText">Nationality</span>
                <div className="flex gap-1 items-center ">
                  <img
                    className="w-5 h-5"
                    src={selectedPlayer?.flagImage}
                    alt="flag"
                  />
                  <span>{selectedPlayer?.nationality}</span>
                </div>
              </div>
            </div>
            <div className="h-2/3 grid grid-cols-2 gap-2 px-5 text-sm">
              <div className="flex flex-col gap-1">
                <span className="text-Appprimary text-2xl">
                  {selectedPlayer?.appearances}
                </span>
                <span className=" text-lightText">Appearances</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-Appprimary text-2xl">
                  {selectedPlayer?.minutesPlayed}
                </span>
                <span className=" text-lightText">Minutes Played</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-Appprimary text-2xl">
                  {selectedPlayer?.cleanSheets}
                </span>
                <span className=" text-lightText">Clean sheets</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-Appprimary text-2xl">
                  {selectedPlayer?.saves}
                </span>
                <span className=" text-lightText">Saves</span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
