import { PlayerInfo } from "@/interfaces/roster-Interface";
import { useRoster } from "./useRoster";
export interface FormationInterface {
  [position: string]: PlayerInfo[];
  Goalkeeper: PlayerInfo[];
  Defender: PlayerInfo[];
  Midfielder: PlayerInfo[];
  Forward: PlayerInfo[];
}
export interface FormationError {
  title: string;
  msg: string;
}
const checkForFormationError = (
  formation: FormationInterface
): FormationError | null => {
  let Error: FormationError | null = null;
  if (
    formation.Goalkeeper.length < 1 ||
    formation.Defender.length < 4 ||
    formation.Midfielder.length < 3 ||
    formation.Forward.length < 3
  ) {
    Error = {
      title: "Not enough starters",
      msg: "Your team doesn't have enough starters for one or more of the positions in the 4-3-3 formation",
    };
  }

  if (
    formation.Goalkeeper.length > 1 ||
    formation.Defender.length > 4 ||
    formation.Midfielder.length > 3 ||
    formation.Forward.length > 3
  ) {
    Error = {
      title: "There are too many starters",
      msg: "Your team has too many starters for one or more of the positions in the 4-3-3 formation",
    };
  }
  return Error;
};
export default function useFormation() {
  const { roster } = useRoster();
  let err: FormationError | null;
  const formation: FormationInterface = {
    Goalkeeper: [],
    Defender: [],
    Midfielder: [],
    Forward: [],
  };
  if (!roster) {
    err = {
      title: "No player Data found",
      msg: "please import your roster first",
    };
    return { formation, err };
  }

  roster?.forEach((p: PlayerInfo) => {
    if (p.starter === "Yes") {
      formation[p.position].push(p);
    }
  });
  err = checkForFormationError(formation);

  return { formation, err };
}
