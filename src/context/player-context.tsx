"use client";
import { createContext, useState, ReactNode } from "react";
import { PlayerInfo } from "@/interfaces/roster-Interface";
import { useRoster } from "@/hooks/useRoster";

export interface PlayerContextValue {
  selectedPlayer: PlayerInfo | null;
  selectPlayer: (p: PlayerInfo) => void;
}

export const PlayerContext = createContext<PlayerContextValue | null>(null);

export const PlayerContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [player, setPlayer] = useState<PlayerInfo | null>(null);
  const { roster } = useRoster();
  const selectPlayer = (player: PlayerInfo) => {
    const data = roster?.find((p) => p.id === player.id);
    data ? setPlayer(data) : setPlayer(null);
  };
  const contextValue: PlayerContextValue = {
    selectedPlayer: player,
    selectPlayer,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};
