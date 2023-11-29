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
    if (formation && !selectedPlayer) selectPlayer(formation.Goalkeeper[0]);
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${field.src})` }}
      className="w-2/3 bg-contain bg-no-repeat flex gap-10 p-6"
    >
      {formation ? (
        <>
          <div className="flex flex-col  justify-center items-center gap-1">
            {formation.Goalkeeper.map((p: PlayerInfo) => (
              <div>
                <PlayerPosition player={p} key={p.id} />
              </div>
            ))}
          </div>
          <div className="flex flex-col  justify-around gap-1 ">
            {formation.Defender.map((p: PlayerInfo, i: number) => (
              <div className={`${i === 0 || i === 3 ? "relative left-3" : ""}`}>
                <PlayerPosition player={p} key={p.id} />
              </div>
            ))}
          </div>
          <div className="flex flex-col  justify-around gap-1">
            {formation.Midfielder.map((p: PlayerInfo) => (
              <div>
                {" "}
                <PlayerPosition player={p} key={p.id} />
              </div>
            ))}
          </div>
          <div className="flex flex-col  justify-around gap-1">
            {formation.Forward.map((p: PlayerInfo, i: number) => (
              <div
                className={`${i === 0 || i === 2 ? "relative right-3" : ""}`}
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
