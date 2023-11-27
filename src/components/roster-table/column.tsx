import { PlayerInfo } from "@/interfaces/roster-Interface";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import ActionsDropDown from "../actions-dropdown";

export const ROSTER_TABLE_HEADERS: ColumnDef<PlayerInfo>[] = [
  {
    header: "Player Name",
    accessorKey: "playerName",
    cell: ({ row }) => {
      return (
        <div className="flex justify-around items-center text-xs">
          <span>
            <Image
              className="rounded-full "
              src={row.original.flagImage}
              alt="country flag"
              width={15}
              height={15}
            />
          </span>
          {row.getValue("playerName")}
        </div>
      );
    },
  },
  { header: "Jersey Number", accessorKey: "jerseyNumber" },
  { header: "Starter", accessorKey: "starter" },
  { header: "Position", accessorKey: "position" },
  {
    header: "Height",
    accessorKey: "height",
    cell: ({ row }) => `${Number(row.getValue("height")) / 10} m`,
  },
  {
    header: "Weight",
    accessorKey: "weight",
    cell: ({ row }) => `${row.getValue("weight")} kg`,
  },
  { header: "Nationality", accessorKey: "nationality" },
  { header: "Appearances", accessorKey: "appearances" },
  {
    header: "Minutes Played",
    accessorKey: "minutesPlayed",
    cell: ({ row }) => {
      return ((row.getValue("minutesPlayed") as number) / 60).toFixed(1);
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const PlayerInfo = row.original;

      return <ActionsDropDown playerId={PlayerInfo.id} />;
    },
  },
];
