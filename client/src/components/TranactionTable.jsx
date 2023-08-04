import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows, columns, setPage , perPage}) {
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
        pagination
        onPaginationModelChange={(e) => setPage(e.page)}
        sx={{
          "& .MuiDataGrid-selectedRowCount": {
            visibility: "hidden",
          },
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: perPage },
          },
        }}
      />
    </div>
  );
}
