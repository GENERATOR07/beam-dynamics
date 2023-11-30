import React, { useEffect, useState } from "react";
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
import { Button } from "./ui/button";
export default function TeamImporterDialog() {
  const [tableData, setTableData] = useState<PlayerInfo[] | null>(null);
  const [fileSummary, setFileSummary] = useState<any>();
  const [err, setError] = useState<string>("");
  const { setRoster, roster } = useRoster();

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
    setFileSummary(null);
  };
  return (
    <Dialog>
      <DialogTrigger className="">
        {roster ? "Re-Import" : "Import"}
      </DialogTrigger>
      <DialogContent className="text-white w-[800px] h-[400px] flex flex-col bg-Appbackground text-xs ">
        <DialogHeader>
          <DialogTitle>Importer</DialogTitle>
          <div className="bg-gray-300 h-[1px]"></div>
          <DialogDescription className="text-white text-sm">
            Roster File
          </DialogDescription>
        </DialogHeader>
        <CSVReader onFileLoaded={handelFileUpload} />
        {err === "" ? <span>File must me in .csv format</span> : null}
        {err === "" ? (
          <table className="text-sm text-white w-full flex flex-col gap-2">
            <thead>
              <tr className="w-full flex justify-start text-xs">
                <th className="grow ">Total Players</th>
                <th className="grow ">Goalkeepers</th>
                <th className="grow ">Defenders</th>
                <th className="grow ">Midfielders</th>
                <th className="grow ">Forwards</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-full flex text-xs text-center ">
                <td className="grow ">{fileSummary?.TotalPlayers}</td>
                <td className="grow ">{fileSummary?.Goalkeeper}</td>
                <td className="grow ">{fileSummary?.Defender}</td>
                <td className="grow ">{fileSummary?.Midfielder}</td>
                <td className="grow ">{fileSummary?.Forward}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col gap-1">
            <span className=" text-red-600">Error</span>
            <span className="p-2 text-xs">{err}</span>
          </div>
        )}

        <DialogFooter className="">
          <DialogClose asChild>
            <Button
              className="bg-Appbackground text-white p-2 absolute bottom-3 "
              onClick={handelImport}
              variant="outline"
              disabled={!tableData}
            >
              Import
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
