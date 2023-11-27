import React, { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiPencilFill } from "react-icons/ri";
import PlayerEditForm, { FormRef } from "./player-edit-form";
import useFormData from "@/hooks/useFormData";
import { Button } from "./ui/button";

interface EditDialogProps {
  id: number;
}

export default function PlayerEditDialog({ id }: EditDialogProps) {
  const formData = useFormData(id);
  const formRef = useRef<FormRef>(null);
  const handleSubmit = () => {
    formRef.current?.submit();
  };
  return (
    <Dialog>
      <DialogTrigger className="flex gap-1 p-1 ">
        <RiPencilFill />
        <span>Edit Player</span>
      </DialogTrigger>
      <DialogContent className="bg-Appbackground text-white">
        <PlayerEditForm ref={formRef} data={formData} />
        <DialogClose>
          <Button
            variant="outline"
            className="bg-Appprimary"
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
