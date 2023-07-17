import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Dashboard() {
  return (
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
  );
}

export default Dashboard;
