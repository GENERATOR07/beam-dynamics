"use client";

import { useState } from "react";
import TeamImporterDialog from "@/components/team-Importer-dialog";
import { RiPencilFill } from "react-icons/ri";

import { useRoster } from "@/hooks/useRoster";
import { RosterTable } from "@/components/roster-table";
import { ROSTER_TABLE_HEADERS } from "@/components/roster-table/column";

export default function RosterPage() {
  const [teamName, setTeamName] = useState("My Team");
  const { roster } = useRoster();

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
          <RosterTable columns={ROSTER_TABLE_HEADERS} data={roster} />
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
