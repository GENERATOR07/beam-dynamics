"use client";

import { PlayerInfo } from "@/interfaces/roster-Interface";
import { RosterActions, rosterReducer } from "@/reducer/roster-reducer";
import { ReactNode, createContext, useReducer } from "react";

export interface RosterContextValue {
  roster: PlayerInfo[] | null;

  dispatch: React.Dispatch<RosterActions>;
}

export const RosterContext = createContext<RosterContextValue | undefined>(
  undefined
);

export const RosterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [roster, dispatch] = useReducer(rosterReducer, null);

  const contextValue: RosterContextValue = {
    roster,
    dispatch,
  };

  return (
    <RosterContext.Provider value={contextValue}>
      {children}
    </RosterContext.Provider>
  );
};
