import React, { useEffect, useState } from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  const xl = useMediaQuery("(min-width:1300px)");
  const md = useMediaQuery("(min-width:1000px)");
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => setIsOpen(xl ? true : false), [xl]);

  return (
    <>
      <Grid container>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Box flex={1} sx={{ maxHeight: "100vh", overflowY: "scroll" }}>
          <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
          <Box p={md ? 4 :2}>
            <Outlet />
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Layout;
