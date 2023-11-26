import { PlayerInfo } from "@/interfaces/rosterInterface";
import { ColumnDef } from "@tanstack/react-table";

export const ROSTER_TABLE_HEADERS: ColumnDef<PlayerInfo>[] = [
  { header: "Player Name", accessorKey: "playerName" },
  { header: "Jersey Number", accessorKey: "jerseyNumber" },
  { header: "Starter", accessorKey: "starter" },
  { header: "Position", accessorKey: "position" },
  { header: "Height", accessorKey: "height" },
  { header: "Weight", accessorKey: "weight" },
  { header: "Nationality", accessorKey: "nationality" },
  { header: "Appearances", accessorKey: "appearances" },
  { header: "Minutes Played", accessorKey: "minutesPlayed" },
];
