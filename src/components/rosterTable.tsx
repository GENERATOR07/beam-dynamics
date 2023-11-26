import { ROSTER_TABLE_HEADERS } from "@/constants/table";
import { PlayerInfo } from "@/interfaces/rosterInterface";
import Image from "next/image";
import React from "react";
interface RosterTableInterface {
  tableData: PlayerInfo[];
}
export default function RosterTable({ tableData }: RosterTableInterface) {
  return (
    <table className="text-xs text-white w-full flex flex-col gap-2">
      <thead>
        <tr className="w-full flex justify-evenly">
          {ROSTER_TABLE_HEADERS.map((header) => (
            <td key={header}>{header}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data: PlayerInfo) => {
          return (
            <tr
              className="w-full flex justify-evenly items-center  "
              key={data.PlayerName}
            >
              <td className="flex gap-1 p-1 justify-between items-center">
                <span>
                  <Image
                    className="rounded-full"
                    src={data.FlagImage}
                    alt="country flag"
                    width={10}
                    height={10}
                  />
                </span>
                {data.PlayerName}
              </td>
              <td>{data.JerseyNumber}</td>
              <td>{data.Starter}</td>
              <td>{data.Position}</td>
              <td>{Number(data.Height) / 10} m</td>
              <td>{data.Weight} kg</td>
              <td>{data.Nationality}</td>
              <td>{data.Appearances}</td>
              <td>{(Number(data.MinutesPlayed) / 60).toFixed(1)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
