import { PlayerInfo } from "@/interfaces/roster-Interface";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiDeleteBin6Line, RiPencilFill } from "react-icons/ri";

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

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-Appbackground text-white"
            align="end"
          >
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex gap-1 p-1 ">
              <RiPencilFill />
              <span>Edit Player</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-1 p-1">
              <RiDeleteBin6Line />
              <span>Delete Player</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
