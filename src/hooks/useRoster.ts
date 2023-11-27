import { RosterContext, RosterContextValue } from "@/context/roster-context";
import { PlayerInfo } from "@/interfaces/roster-Interface";
import { useContext } from "react";

export const useRoster = () => {
  const context = useContext(RosterContext);
  if (!context) {
    throw new Error("useRoster must be used within a RosterProvider");
  }
  const { roster, dispatch } = context;
  const setRoster = (data: PlayerInfo[] | null) => {
    dispatch({ type: "SET_ROSTER", payload: data as PlayerInfo[] });
  };
  return { roster, setRoster };
};
