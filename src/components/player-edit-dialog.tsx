import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiPencilFill } from "react-icons/ri";

interface EditDialogProps {
  id: number;
}

export default function PlayerEditDialog({ id }: EditDialogProps) {
  console.log("u trying to edit", id);

  return (
    <Dialog>
      <DialogTrigger className="flex gap-1 p-1 ">
        <RiPencilFill />
        <span>Edit Player</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
