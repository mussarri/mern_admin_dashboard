import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useGetUserPerformanceQuery } from "redux/api";

function Performance() {
  const id = "63701cc1f032395694000009";
  const { isLoading, isError, data } = useGetUserPerformanceQuery({ id });
  const columns = [
    { field: "id", headerName: "Transaction ID", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
    },
    {
      field: "products",
      headerName: "Number of products",
      flex: 1,
      renderCell: (params) => params.value.length,
    },
    { field: "userId", headerName: "Customer ID", flex: 1 },
  ];
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (data) {
    const rows = data.map(function (item) {
      return {
        id: item._id,
        cost: item.cost,
        products: item.products,
        userId: item.userId,
      };
    });
    return (
      <>
        <Box px={1} mb={2}>
          <Typography variant="h2">User Performance - {id}</Typography>
        </Box>
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            isLoading={isLoading || !data}
            sx={{
              "& .MuiDataGrid-selectedRowCount": {
                visibility: "hidden",
              },
            }}
           
            pageSizeOptions={false}
          />
        </div>
      </>
    );
  }
}

export default Performance;
