"use client";

import { useEffect, useState } from "react";
import TeamImporterDialog from "@/components/team-Importer-dialog";

import { useRoster } from "@/hooks/useRoster";
import { RosterTable } from "@/components/roster-table";
import { ROSTER_TABLE_HEADERS } from "@/components/roster-table/column";

import { Button } from "@/components/ui/button";
import TeamName from "@/components/team-name";
import { PlayerInfo } from "@/interfaces/roster-Interface";
import { filterData } from "@/helper/table-helper";

import Search from "@/components/search";
export default function RosterPage() {
  const { roster } = useRoster();
  const [tableData, setTableData] = useState<PlayerInfo[] | null>(roster);

  useEffect(() => {
    if (!roster) return;
    setTableData(roster);
  }, [roster]);

  const searchTable = (search: string) => {
    if (!roster) return;
    setTableData(filterData(roster, search));
  };

  const clearSearch = () => {
    setTableData(roster);
  };

  return (
    <main className="bg-Appbackground text-Appprimary w-full h-screen relative">
      <div className=" h-4/5 w-11/12 rounded-[8px]  m-auto  ">
        <div className="flex items-center justify-between py-4 w-full gap-2 ">
          <TeamName title="Roster Details" />
          <div className="flex gap-1">
            <Search onSearch={searchTable} onClear={clearSearch} />

            <div
              className={`${
                roster ? "" : "bg-Appprimary"
              } text-white w-[132px] border-[#494949] border-[1px] h-[44px] rounded-[8px] flex items-center justify-center text-sm`}
            >
              <TeamImporterDialog />
            </div>
          </div>
        </div>
        {tableData ? (
          <RosterTable columns={ROSTER_TABLE_HEADERS} data={tableData} />
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
