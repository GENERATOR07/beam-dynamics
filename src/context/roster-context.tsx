"use client";

import { PlayerInfo } from "@/interfaces/roster-Interface";
import { ReactNode, createContext, useState } from "react";

export interface RosterContextValue {
  roster: PlayerInfo[] | null;
  setRoster: (data: PlayerInfo[] | null) => void;
}

export const RosterContext = createContext<RosterContextValue | undefined>(
  undefined
);

export const RosterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<PlayerInfo[] | null>(null);

  const setRoster: RosterContextValue["setRoster"] = (data) => {
    setData(data);
  };

  const contextValue: RosterContextValue = {
    roster: data,
    setRoster,
  };

  return (
    <RosterContext.Provider value={contextValue}>
      {children}
    </RosterContext.Provider>
  );
};
