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
      <div className="">
        <h3>Roster Details</h3>
        <div>
          <span>{teamName}</span>
          <button>
            <RiPencilFill />
          </button>
        </div>
      </div>
      <div className=" h-4/5 w-3/4 rounded-[8px]  m-auto  ">
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
