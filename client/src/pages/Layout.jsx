import React, { useState } from "react";
import { Grid,  } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";



const Layout = () => {
  return (
    <>
      <Grid container>
        <Grid xs={2}>
          <Sidebar />
        </Grid>
        <Grid xs={10}>
          <Navbar />
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
