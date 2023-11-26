export const prepareRoosterTableData = (data: any) => {
  const tableHeader = data[0];
  const playerData = data.slice(1);
  const tableData = playerData.map((element: any) => {
    const data: any = {};
    element.forEach((el: any, i: number) => {
      if (el === "")
        throw new Error(
          "your sheet is missing data.please ensure all cells are filled out"
        );
      data[tableHeader[i].replace(" ", "")] = el;
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
    summary[el.Position] = summary[el.Position] + 1;
  });
  return summary;
};
