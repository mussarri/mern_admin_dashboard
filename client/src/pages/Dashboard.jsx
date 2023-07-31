import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useGetDashboardStatsQuery } from "redux/api";
import { useTheme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import OverviewChart from "./OverviewChart.jsx";
import { DataGrid } from "@mui/x-data-grid";
import Pie from "./Pie.jsx";

const columns = [
  { field: "_id", headerName: "ID", flex: 1 },
  {
    field: "userId",
    headerName: "User ID",
    flex: 1,
  },
  {
    field: "CreatedaAt",
    headerName: "Created At",
    flex: 1,
  },
  {
    field: "products",
    headerName: "Number of products",
    flex: 1,
  },
  { field: "cost", headerName: "Price", flex: 1 },
];

function Item({ theme, title, icon, value, description, increase }) {
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection={"column"}
      justifyContent={"space-between"}
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
    >
      <Box display={"flex"} justifyContent={"space-between"} gap={1}>
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
        {icon}
      </Box>
      <Typography variant="h2">{value}</Typography>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography>{increase}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
}

function Dashboard() {
  const { isLoading, isError, data } = useGetDashboardStatsQuery();
  const theme = useTheme();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (data) {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h1" component="h1">
              Dashboard
            </Typography>
            <Typography>Welcome to dashboard</Typography>
          </Box>
          <Box>
            <Button variant="contained" size="large" color="secondary">
              Download Reports
            </Button>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="160px"
          gap="20px"
          mt={2}
        >
          <Item
            theme={theme}
            title="Total Customers"
            icon={<PersonIcon />}
            value={data.totalCustomers}
            increase="+2%"
            description="Since last month"
          />
          <Item
            theme={theme}
            title="Sales Today"
            icon={<ReceiptIcon />}
            value={data.currentDayStats.totalSales}
            increase="+12%"
            description="Since last month"
          />
          <Box
            gridColumn="8 span"
            gridRow="span 2"
            sx={{
              height: "100%",
              width: "100%",
              background: theme.palette.background.alt,
            }}
          >
            <OverviewChart />
          </Box>
          <Item
            theme={theme}
            title="Monthly Sales"
            icon={<ReceiptIcon />}
            value={data.currentMonthStats.totalSales}
            increase="+12%"
            description="Since last month"
          />
          <Item
            theme={theme}
            title="Yearly Sales"
            icon={<ReceiptIcon />}
            value="2086"
            increase="+12%"
            description="Since last month"
          />
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="160px"
          gap="20px"
          mt={2}
        >
          <Box gridColumn={"8 span"} gridRow={"2 span"}>
            <div
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <DataGrid
                rows={data.lastTransactions}
                getRowId={(row) => row._id}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                isLoading={isLoading || !data}
                sx={{
                  "& .MuiDataGrid-selectedRowCount": {
                    visibility: "hidden",
                  },
                }}
              />
            </div>
          </Box>
          <Box gridColumn={"4 span"} gridRow={"2 span"}  >
            <Pie theme={theme} salesByCategory={data.salesByCategory} />
          </Box>
        </Box>
      </>
    );
  }
}

export default Dashboard;
