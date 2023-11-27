import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiPencilFill } from "react-icons/ri";
import PlayerEditForm from "./player-edit-form";
import useFormData from "@/hooks/useFormData";

interface EditDialogProps {
  id: number;
}

export default function PlayerEditDialog({ id }: EditDialogProps) {
  const formData = useFormData(id);

  return (
    <Dialog>
      <DialogTrigger className="flex gap-1 p-1 ">
        <RiPencilFill />
        <span>Edit Player</span>
      </DialogTrigger>
      <DialogContent className="bg-Appbackground text-white">
        <PlayerEditForm data={formData} />
      </DialogContent>
    </Dialog>
  );
}
