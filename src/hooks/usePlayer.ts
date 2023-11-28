import { PlayerContext } from "@/context/player-context";
import { useContext } from "react";

export default function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
}
