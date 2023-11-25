"use client";

import { useContext, useState } from "react";
import TeamImporterDialog from "../components/teamImporterDialog";
import { RosterContext } from "@/context/rosterContext";
import { RiPencilFill } from "react-icons/ri";
import RosterTable from "@/components/rosterTable";

export default function RosterPage() {
  const [teamName, setTeamName] = useState("My Team");
  const { roster } = useContext(RosterContext);
  console.log(roster);
  return (
    <main className="bg-Appbackground text-Appprimary w-full h-screen relative">
      <div className="flex gap-2 items-center absolute right-10">
        <input
          className="rounded-[8px] p-2 bg-background border-white border-[1px]  "
          placeholder="find player"
        />
        <button className="bg-Appprimary rounded-[8px] p-2 text-white">
          <TeamImporterDialog />
        </button>
      </div>
      <div className="">
        <h3>Roster Details</h3>
        <div>
          <span>{teamName}</span>
          <button>
            <RiPencilFill />
          </button>
        </div>
      </div>
      <div className="bg-[#2D2D2D] h-4/5 w-3/4 rounded-[8px] mt-14 m-auto overflow-y-scroll">
        {roster ? (
          <RosterTable tableData={roster} />
        ) : (
          <div className="">
            <p className="text-gray-300">
              You do not have any players on roster
            </p>
            <TeamImporterDialog />
          </div>
        )}
      </div>
    </main>
  );
}
