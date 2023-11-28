import { FormationError } from "@/hooks/useFormation";
import { MdOutlineWarningAmber } from "react-icons/md";
import React from "react";
interface FromationErrorProps {
  error: FormationError;
}
export default function FormationErrorAlert({ error }: FromationErrorProps) {
  return (
    <div className="text-white flex  bg-Appbackground py-8 px-16 rounded-md gap-2 ">
      <MdOutlineWarningAmber color="yellow" />
      <div className=" flex flex-col gap-1">
        <span className="text-sm">{error.title}</span>
        <span className="text-xs max-w-xs ">{error.msg}</span>
      </div>
    </div>
  );
}
