export const prepareRoosterTableData = (data: any) => {
  const tableHeader: string[] = data[0].map((header: string) => {
    return header[0].toLocaleLowerCase() + header.slice(1).replace(" ", "");
  });
  const playerData: string[][] = data.slice(1);
  const tableData = playerData.map((element: string[], i: number) => {
    const data: any = { id: i + 1 };
    element.forEach((el: string, i: number) => {
      if (el === "")
        throw new Error(
          "your sheet is missing data.please ensure all cells are filled out"
        );
      data[tableHeader[i]] = el;
    });

    return data;
  });

  return tableData;
};

export const prepareFileSummary = (data: any) => {
  let summary: any = {
    TotalPlayers: 0,
    Goalkeeper: 0,
    Defender: 0,
    Midfielder: 0,
    Forward: 0,
  };
  data.forEach((el: any) => {
    summary.TotalPlayers = summary.TotalPlayers + 1;
    summary[el.position] = summary[el.position] + 1;
  });
  return summary;
};
