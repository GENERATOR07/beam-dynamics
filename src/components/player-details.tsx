"use Client";
import usePlayer from "@/hooks/usePlayer";
import Image from "next/image";
import React from "react";

export default function PlayerDetails() {
  const { selectedPlayer } = usePlayer();
  console.log("player details", selectedPlayer);

  return (
    <div className="w-1/4 bg-Appbackground">
      {/* <Image
        src={player?.playerImage as string}
        alt={player?.playerName as string}
        height={100}
        width={100}
      ></Image> */}
      {selectedPlayer?.playerName}
    </div>
  );
}
