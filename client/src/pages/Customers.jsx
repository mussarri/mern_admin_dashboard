import React, { useEffect, useState } from "react";
import { useGetCustomersQuery } from "../redux/api.js";
import { Box, Typography } from "@mui/material";
import flag from "../icon/flag.json";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  { field: "name", headerName: "Name", width: 120 },
  { field: "email", headerName: "E-mail", width: 250 },
  { field: "phoneNumber", headerName: "Phone Number", width: 150 },
  { field: "occupation", headerName: "Occupation", width: 150 },
];

function Customers() {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  const { isLoading, isError, data } = useGetCustomersQuery(paginationModel);

  const [rowCountState, setRowCountState] = useState(data?.count);

  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      data?.count !== undefined ? data?.count : prevRowCountState
    );
  }, [data?.count, setRowCountState]);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (data) {
    const { customers } = data;
    const rows = customers.map(function (user, index) {
      return {
        id: user._id,
        city: user.city,
        country: flag[user.country].emoji,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        occupation: user.occupation,
      };
    });
    return (
      <>
        <Box px={1} mb={2}>
          <Typography variant="h2">Customers</Typography>
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
            rowCount={rowCountState}
            pagination
            pageSizeOptions={false}
            paginationMode="server"
            sortingMode="server"
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </div>
      </>
    );
  }
}

export default Customers;
