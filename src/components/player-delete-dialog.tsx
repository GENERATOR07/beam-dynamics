import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "./ui/button";
import { useTableActions } from "@/hooks/useTableActions";
interface DeleteDialogProps {
  id: number;
}

export default function PlayerDeleteDialog({ id }: DeleteDialogProps) {
  const { deletePlayer } = useTableActions();
  const handleDelete = () => {
    deletePlayer(id);
  };
  return (
    <Dialog>
      <DialogTrigger className="flex gap-1 p-1 ">
        <RiDeleteBin6Line />
        <span>Delete Player</span>
      </DialogTrigger>
      <DialogContent className="bg-Appbackground text-white">
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end">
          <DialogClose>
            <Button>Cancel</Button>
            <Button onClick={handleDelete} className="bg-red-600">
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
