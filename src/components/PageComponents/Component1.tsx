import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { userDataProps } from "../types";

export const Component1 = () => {
  const [tableData, setTableData] = useState<userDataProps[] | null>(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setTableData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tableData]);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userId",
      headerName: "User Id",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Title",
      width: 250,
      editable: true,
    },
    {
      field: "body",
      headerName: "Body",
      sortable: false,
      width: 660,
    },
  ];

  const rows = tableData ? tableData : [];
  return (
    <Box sx={{ height: 400, width: "100%" }} className="table">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
