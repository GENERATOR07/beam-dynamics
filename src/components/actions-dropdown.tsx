import React from "react";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiDeleteBin6Line, RiPencilFill } from "react-icons/ri";
import PlayerEditDialog from "./player-edit-dialog";
import PlayerDeleteDialog from "./player-delete-dialog";

interface ActionsDropDownProps {
  playerId: number;
}

export default function ActionsDropDown({ playerId }: ActionsDropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-Appbackground text-white w-[233px] h-[167px] p-4 flex flex-col gap-4"
        align="end"
      >
        <DropdownMenuLabel className="text-[18px] leading-[18px]">
          Actions
        </DropdownMenuLabel>

        <PlayerEditDialog id={playerId} />

        <PlayerDeleteDialog id={playerId} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
