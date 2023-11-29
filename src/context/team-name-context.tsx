"use client";
import { createContext, useState, ReactNode } from "react";

interface TeamNameContextValue {
  teamName: string;
  setTeamName: (n: string) => void;
}

export const TeamNameContext = createContext<TeamNameContextValue | null>(null);

export const TeamContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState<string>("My Team");
  const setTeamName = (name: string) => {
    setName(name);
  };
  const contextValue: TeamNameContextValue = {
    teamName: name,
    setTeamName,
  };
  return (
    <TeamNameContext.Provider value={contextValue}>
      {children}
    </TeamNameContext.Provider>
  );
};
