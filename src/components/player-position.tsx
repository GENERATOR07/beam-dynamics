import usePlayer from "@/hooks/usePlayer";
import { PlayerInfo } from "@/interfaces/roster-Interface";
import React from "react";
interface PlayerPositionProps {
  player: PlayerInfo;
}
export default function PlayerPosition({ player }: PlayerPositionProps) {
  const { selectPlayer, selectedPlayer } = usePlayer();
  const handleClick = () => {
    selectPlayer(player);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className={`h-8 w-8 rounded-full text-xs  flex items-center justify-center  p-2 ${
          player.id === selectedPlayer?.id
            ? "bg-yellow-600"
            : "bg-Appbackground border-[1px] border-white"
        }`}
      >
        {player.jerseyNumber}
      </button>
      <span className="text-xs ">{player.playerName}</span>
    </>
  );
}
