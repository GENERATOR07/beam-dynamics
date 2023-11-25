import { ROSTER_TABLE_HEADERS } from "@/constants/table";
import Image from "next/image";
import React from "react";

export default function RosterTable({ tableData }: any) {
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
        {tableData.map((data: any) => {
          return (
            <tr
              className="w-full flex justify-evenly items-center  "
              key={data["Player Name"]}
            >
              <td className="flex gap-1 p-1 justify-between items-center">
                <span>
                  <Image
                    className="rounded-full"
                    src={data["Flag Image"]}
                    alt="country flag"
                    width={10}
                    height={10}
                  />
                </span>
                {data["Player Name"]}
              </td>
              <td>{data["Jersey Number"]}</td>
              <td>{data["Starter"]}</td>
              <td>{data["Position"]}</td>
              <td>{data["Height"] / 10} m</td>
              <td>{data["Weight"]} kg</td>
              <td>{data["Nationality"]}</td>
              <td>{data["Appearances"]}</td>
              <td>{(data["Minutes Played"] / 60).toFixed(1)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
