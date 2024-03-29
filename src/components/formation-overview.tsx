import React, { useEffect } from "react";
import field from "public/Field.png";
import { FormationInterface } from "@/hooks/useFormation";
import { PlayerInfo } from "@/interfaces/roster-Interface";
import PlayerPosition from "./player-position";
import usePlayer from "@/hooks/usePlayer";
interface FormationOverviewProps {
  formation: FormationInterface | null;
}
export default function FormationOverview({
  formation,
}: FormationOverviewProps) {
  const { selectPlayer, selectedPlayer } = usePlayer();

  useEffect(() => {
    if (formation) {
      selectPlayer(selectedPlayer ? selectedPlayer : formation.Goalkeeper[0]);
    }
  }, [formation, selectPlayer, selectedPlayer]);

  return (
    <div
      style={{ backgroundImage: `url(${field.src})` }}
      className="w-[808px] bg-contain bg-no-repeat flex gap-10 justify-evenly "
    >
      {formation ? (
        <>
          <div className="flex flex-col  justify-center items-center gap-1 relative left-2 top-4">
            {formation.Goalkeeper.map((p: PlayerInfo) => (
              <div key={p.id}>
                <PlayerPosition player={p} />
              </div>
            ))}
          </div>
          <div className="flex flex-col  justify-around gap-1 relative right-16">
            {formation.Defender.map((p: PlayerInfo, i: number) => (
              <div
                className={`${i === 0 || i === 3 ? "relative left-3" : ""}`}
                key={p.id}
              >
                <PlayerPosition player={p} />
              </div>
            ))}
          </div>
          <div className="flex flex-col  justify-around gap-1 relative right-20 top-3">
            {formation.Midfielder.map((p: PlayerInfo) => (
              <div key={p.id}>
                {" "}
                <PlayerPosition player={p} key={p.id} />
              </div>
            ))}
          </div>
          <div className="flex flex-col  justify-around gap-1 relative right-16 top-4">
            {formation.Forward.map((p: PlayerInfo, i: number) => (
              <div
                className={`${i === 0 || i === 2 ? "relative right-3" : ""}`}
                key={p.id}
              >
                <PlayerPosition player={p} key={p.id} />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
