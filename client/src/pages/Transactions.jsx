import React, { useEffect, useState } from "react";
import { useGetTransactionsQuery } from "../redux/api.js";

import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 20 },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1,
  },
  {
    field: "cost",
    headerName: "Cost",
    flex: 1,
  },
  { field: "products", headerName: "Products", flex: 1, sortable: false },
  { field: "userId", headerName: "User ID", flex: 1, sortable: false },
];

function Transactions() {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  const { isLoading, isError, data } = useGetTransactionsQuery(paginationModel);

  const [rowCountState, setRowCountState] = useState(data?.count);

  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      data?.count !== undefined ? data?.count : prevRowCountState
    );
  }, [data?.count, setRowCountState]);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (data) {
    const { transactions } = data;
    const rows = transactions.map(function (transaction, index) {
      return {
        id: index,
        createdAt: transaction.createdAt,
        cost: transaction.cost || 0,
        products: transaction.products || "-",
        userId: transaction.userId || "-",
      };
    });
    return (
      <>
        <Box px={1} mb={2}>
          <Typography variant="h2">Transactions</Typography>
        </Box>
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <DataGrid
            sx={{
              "& .MuiDataGrid-selectedRowCount": {
                visibility: "hidden",
              },
            }}
            rows={rows}
            columns={columns}
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

export default Transactions;
