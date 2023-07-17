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
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}  />
        <Grid flexGrow={1}>
          <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
          <Box p={4}>
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
