import { PlayerInfo } from "@/interfaces/roster-Interface";

export const filterData = (
  data: PlayerInfo[],
  searchValue: string
): PlayerInfo[] => {
  let filteredData: PlayerInfo[] = [];
  filteredData = data.filter((player: PlayerInfo) => {
    if (
      player.playerName.toLowerCase().includes(searchValue) ||
      player.position.toLowerCase().includes(searchValue)
    )
      return true;
    return false;
  });
  return filteredData;
};
