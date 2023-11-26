"use client";

import { useState } from "react";
import TeamImporterDialog from "@/components/team-Importer-dialog";

import { useRoster } from "@/hooks/useRoster";
import { RosterTable } from "@/components/roster-table";
import { ROSTER_TABLE_HEADERS } from "@/components/roster-table/column";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TeamName from "@/components/team-name";
export default function RosterPage() {
  const [search, setSearch] = useState<string | "">("");
  const { roster } = useRoster();

  return (
    <main className="bg-Appbackground text-Appprimary w-full h-screen relative">
      <div className=" h-4/5 w-3/4 rounded-[8px]  m-auto  ">
        <div className="flex items-center justify-between py-4 w-full gap-2 ">
          <TeamName />
          <div className="flex gap-1">
            <Input
              placeholder="find Player"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="max-w-sm bg-Appbackground text-white"
            />
            <Button variant="outline" className="bg-Appprimary text-white">
              <TeamImporterDialog />
            </Button>
          </div>
        </div>
        {roster ? (
          <RosterTable
            columns={ROSTER_TABLE_HEADERS}
            data={roster}
            searchValue={search}
          />
        ) : (
          <div className="flex flex-col w-full h-full items-center justify-center">
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
