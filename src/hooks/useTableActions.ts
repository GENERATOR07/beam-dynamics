import { useReducer } from "react";

import { useContext } from "react";
import { RosterContext, RosterContextValue } from "@/context/roster-context";
import { rosterReducer } from "@/reducer/roster-reducer";
import { PlayerInfo } from "@/interfaces/roster-Interface";
import { PlayerFormData } from "@/components/player-edit-form";

export const useTableActions = () => {
  const context = useContext(RosterContext) as RosterContextValue;
  if (!context) {
    throw new Error("useTableActions must be used within a RosterProvider");
  }
  const { dispatch } = context;
  const updatePlayer = (playerData: PlayerFormData) => {
    dispatch({
      type: "UPDATE_PLAYER",
      payload: { id: playerData.id, data: playerData },
    });
  };

  const deletePlayer = (playerId: number) => {
    dispatch({
      type: "DELETE_PLAYER",
      payload: { id: playerId, data: undefined },
    });
  };

  return { updatePlayer, deletePlayer };
};
