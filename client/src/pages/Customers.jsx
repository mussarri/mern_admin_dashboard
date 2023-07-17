import React from "react";
import { useGetCustomersQuery } from "../redux/api.js";
import DataTable from "../components/CustomerTable.jsx";
import { Box, Typography } from "@mui/material";
import flag from "../icon/flag.json";

const columns = [
  { field: "id", headerName: "ID", width: 20 },
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
  const { isLoading, isError, data } = useGetCustomersQuery();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (data) {
    const rows = data.map(function (user, index) {
      return {
        id: index,
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
        <DataTable rows={rows} columns={columns} />
      </>
    );
  }
}

export default Customers;
