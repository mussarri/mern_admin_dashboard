import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import OverviewChart from "./OverviewChart.jsx";

function Overview() {
  const [view, setView] = useState("sales");
  return (
    <>
      <Box px={2} display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h2">Overview</Typography>
        <FormControl sx={{ mt: "1rem" }} size="small">
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="view"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box height="75vh">
        <OverviewChart view={view} />
      </Box>
    </>
  );
}

export default Overview;
