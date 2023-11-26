import { RosterContext, RosterContextValue } from "@/context/rosterContext";
import { useContext } from "react";

export const useRoster = () => {
  const context = useContext(RosterContext);
  if (!context) {
    throw new Error("useRoster must be used within a RosterProvider");
  }
  return context as RosterContextValue;
};
