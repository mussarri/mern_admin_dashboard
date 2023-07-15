import { useTheme } from "@emotion/react";
import { Avatar, Box, TextField, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        boxShadow: theme.shadows[1],
      }}
      p={2}
    >
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        size="small"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Avatar sx={{ bgcolor: theme.palette.secondary.dark }}>M</Avatar>
        <Typography>Mustafa</Typography>
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  );
}

export default Navbar;
