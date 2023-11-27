import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "./ui/button";
interface DeleteDialogProps {
  id: number;
}

export default function PlayerDeleteDialog({ id }: DeleteDialogProps) {
  console.log("u trying to delete", id);
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
          <Button>Cancel</Button>
          <Button className="bg-red-600">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
