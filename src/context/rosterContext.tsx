"use client";
import { createContext, useState } from "react";

export const RosterContext = createContext<any>(undefined);

export const RosterProvider = ({ children }: any) => {
  const [data, setData] = useState<any>(null);
  const setRoster = (data: any) => {
    setData(data);
  };
  const contextValue = {
    roster: data,
    setRoster,
  };
  return (
    <RosterContext.Provider value={contextValue}>
      {children}
    </RosterContext.Provider>
  );
};
