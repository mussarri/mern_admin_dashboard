import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows, columns, setPage }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={[...columns, { field: 'rating', sortable: false }]} 
        onPaginationModelChange={(e) => setPage(e.page)}
        sx={{
          "& .MuiDataGrid-selectedRowCount": {
            visibility: "hidden",
          },
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
      />
    </div>
  );
}
