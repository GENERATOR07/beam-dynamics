import { useContext } from "react";
import { TeamNameContext } from "@/context/team-name-context";

export default function useTeamName() {
  const context = useContext(TeamNameContext);
  if (!context) {
    throw new Error("useTeamName must be used within a TeamNameProvider");
  }
  return context;
}
