import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Grid container>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Box flex={1} sx={{ maxHeight: "100vh", overflowY: "scroll" }}>
          <Navbar
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
          <Box p={4}>
            <Outlet />
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Layout;
