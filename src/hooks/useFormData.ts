import React from "react";
import { useRoster } from "./useRoster";
import { PlayerFormData } from "@/components/player-edit-form";

export default function useFormData(id: number) {
  const { roster } = useRoster();
  const player = roster?.find((player) => player.id == id);
  const formData: PlayerFormData = {
    id,
    height: player?.height,

    jerseyNumber: player?.jerseyNumber,
    playerName: player?.playerName,
    weight: player?.weight,
    position: player?.position,
    starter: player?.starter,
    nationality: player?.nationality,
  };
  return formData;
}
