import React, { useEffect } from "react";
import field from "public/Field.png";
import { FormationInterface } from "@/hooks/useFormation";
import { PlayerInfo } from "@/interfaces/roster-Interface";
import PlayerPosition from "./player-position";
import usePlayer from "@/hooks/usePlayer";
interface FormationOverviewProps {
  formation: FormationInterface;
}
export default function FormationOverview({
  formation,
}: FormationOverviewProps) {
  const { selectPlayer, selectedPlayer } = usePlayer();
  useEffect(() => {
    if (!selectedPlayer) selectPlayer(formation.Goalkeeper[0]);
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${field.src})` }}
      className="w-2/3 bg-contain bg-no-repeat flex gap-10 p-6"
    >
      <div className="flex flex-col  justify-center items-center gap-1">
        {formation.Goalkeeper.map((p: PlayerInfo) => (
          <PlayerPosition player={p} key={p.id} />
        ))}
      </div>
      <div className="flex flex-col  justify-around gap-1">
        {formation.Defender.map((p: PlayerInfo) => (
          <PlayerPosition player={p} key={p.id} />
        ))}
      </div>
      <div className="flex flex-col  justify-around gap-1">
        {formation.Midfielder.map((p: PlayerInfo) => (
          <PlayerPosition player={p} key={p.id} />
        ))}
      </div>
      <div className="flex flex-col  justify-around gap-1">
        {formation.Forward.map((p: PlayerInfo) => (
          <PlayerPosition player={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
