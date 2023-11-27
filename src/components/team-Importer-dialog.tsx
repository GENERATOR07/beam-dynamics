import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  prepareFileSummary,
  prepareRoosterTableData,
} from "@/helper/file-Helper";

import { useRoster } from "@/hooks/useRoster";
import { PlayerInfo } from "@/interfaces/roster-Interface";
export default function TeamImporterDialog() {
  const [tableData, setTableData] = useState<PlayerInfo[] | null>(null);
  const [fileSummary, setFileSummary] = useState<any>();
  const [err, setError] = useState<string>("");
  const { setRoster } = useRoster();

  const handelFileUpload = (data: any) => {
    try {
      const tableData = prepareRoosterTableData(data);

      const fileSummary = prepareFileSummary(tableData);

      setFileSummary(fileSummary);
      setTableData(tableData);
      setError("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handelImport = () => {
    setRoster(tableData);

    setTableData(null);
  };
  return (
    <Dialog>
      <DialogTrigger className="">Import team</DialogTrigger>
      <DialogContent className="text-white w-[800px] h-[400px] flex flex-col bg-Appbackground">
        <DialogHeader>
          <DialogTitle>Importer</DialogTitle>
          <DialogDescription>Roster File</DialogDescription>
        </DialogHeader>
        <CSVReader onFileLoaded={handelFileUpload} />
        {err === "" ? <span>File must me in .csv format</span> : null}
        {err === "" ? (
          <table className="text-sm text-white w-full flex flex-col gap-2">
            <thead>
              <tr className="w-full flex justify-evenly">
                <th>Total Players</th>
                <th>Goalkeepers</th>
                <th>Defenders</th>
                <th>Midfielders</th>
                <th>Forwards</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-full flex justify-evenly ">
                <td>{fileSummary?.TotalPlayers}</td>
                <td>{fileSummary?.Goalkeeper}</td>
                <td>{fileSummary?.Defender}</td>
                <td>{fileSummary?.Midfielder}</td>
                <td>{fileSummary?.Forward}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col gap-1">
            <span className=" text-red-600">Error</span>
            <span className="p-2 text-xs">{err}</span>
          </div>
        )}

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <button className="bg-Appprimary p-2" onClick={handelImport}>
              Import
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
