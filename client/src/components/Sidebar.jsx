import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";

import AdbIcon from "@mui/icons-material/Adb";
import InventoryIcon from "@mui/icons-material/Inventory";
import Person2Icon from "@mui/icons-material/Person2";
import PaidIcon from "@mui/icons-material/Paid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArticleIcon from "@mui/icons-material/Article";
import TodayIcon from "@mui/icons-material/Today";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReportIcon from "@mui/icons-material/Report";
import { useNavigate, Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const theme = useTheme();
  const navigete = useNavigate();

  return (
    <Grid item xs={2} style={{ display: isOpen ? "flex" : "none", overflowX: "hidden", overflowY: "scroll", maxHeight: "100vh" }}>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          background: theme.palette.primary.dark,
          boxShadow: theme.shadows[5],
        }}
        role="presentation"
      >
        <Box p={2} sx={{ display: "flex" }}>
          <Link to={"/dashboard"}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/dashboard"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MERN Admin
            </Typography>
          </Link>
        </Box>
        <Divider />
        <Typography px={3} mt={2} sx={{ fontSize: 15 }}>
          Client
        </Typography>
        <List>
          {[
            { icon: <InventoryIcon />, text: "Products" },
            { icon: <Person2Icon />, text: "Customers" },
            { icon: <PaidIcon />, text: "Transactions" },
            { icon: <LocationOnIcon />, text: "Geography" },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => navigete("/" + item.text.toLocaleLowerCase())}
              >
                <IconButton>{item.icon}</IconButton>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography px={3} mt={2} sx={{ fontSize: 15 }}>
          Sales
        </Typography>
        <List>
          {[
            { icon: <ArticleIcon />, text: "Overview" },
            { icon: <TodayIcon />, text: "Daily" },
            { icon: <CalendarMonthIcon />, text: "Monthly" },
            { icon: <ReportIcon />, text: "Breakdown" },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => navigete("/" + item.text.toLocaleLowerCase())}
              >
                <IconButton>{item.icon}</IconButton>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>hello </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  );
};

export default Sidebar;
