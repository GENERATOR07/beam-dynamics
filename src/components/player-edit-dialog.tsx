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
      <DialogTrigger className="flex gap-4 p-1 item-center jus">
        <RiPencilFill size={24} />
        <span className="text-[14px] leading-[21px]">Edit Player</span>
      </DialogTrigger>
      <DialogContent className="bg-Appbackground text-white w-[480px] h-[582px]">
        <span className="text-[18px] leading-[27px] relative bottom-3">
          Edit Player
        </span>
        <PlayerEditForm ref={formRef} data={formData} />
        <DialogClose className="relative left-40">
          <div
            className="bg-Appprimary  border-[#494949] border-[1px] w-[114px] h-[44px] rounded-[8px] text-sm flex justify-center items-center relative left-40"
            onClick={handleSubmit}
          >
            Edit Player
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
