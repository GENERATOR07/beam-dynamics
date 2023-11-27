import { PlayerFormData } from "@/components/player-edit-form";
import { PlayerInfo } from "@/interfaces/roster-Interface";

interface PayloadInterface {
  id: number;
  data: PlayerFormData | undefined;
}

export interface RosterActions {
  type: "SET_ROSTER" | "UPDATE_PLAYER" | "DELETE_PLAYER";
  payload: PayloadInterface | PlayerInfo[];
}

export const rosterReducer = (
  state: PlayerInfo[] | null,
  action: RosterActions
): PlayerInfo[] | null => {
  switch (action.type) {
    case "SET_ROSTER": {
      let roster = action.payload;
      return roster as PlayerInfo[];
    }
    case "UPDATE_PLAYER": {
      let updatedState = state?.map((data: PlayerInfo) => {
        if (data.id === (action.payload as PayloadInterface).id) {
          return { ...data, ...(action.payload as PayloadInterface).data };
        }
        return data;
      });
      return updatedState as PlayerInfo[];
    }

    case "DELETE_PLAYER": {
      let updatedState = state?.filter(
        (data: PlayerInfo) => data.id != (action.payload as PayloadInterface).id
      );

      return updatedState as PlayerInfo[];
    }

    default:
      return state;
  }
};
