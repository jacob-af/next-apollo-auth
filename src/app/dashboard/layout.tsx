"use client";

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./components/listItems";
import Link from "@mui/material/Link";
import BottomNavBar from "./components/BottomNavBar";
import AreYouLoggedIn from "./components/AreYouLoggedIn";
import { Drawer } from "./components/Drawer";
import { AppBar } from "./components/AppBar";
import SignOutButton from "./components/SignOutButton";

export const drawerWidth = 240;

const defaultTheme = createTheme({});

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex", height: 1 }}>
        {appBarContent(open, toggleDrawer)}
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              bgcolor: "#000",
              px: [1]
            }}
          >
            <IconButton onClick={toggleDrawer} sx={{ color: "#FFF" }}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <List
            component="nav"
            sx={{ bgcolor: "#000", color: "#FFF", height: 1 }}
          >
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: 1,
            overflow: "auto",
            justifyContent: "center",
            pr: { xs: 0, sm: "72px" },
            pb: { xs: "56px", sm: 0 }
          }}
        >
          <Toolbar />
          {children}
          <BottomNavBar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
function appBarContent(open: boolean, toggleDrawer: () => void) {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        sx={{
          pr: "0px",
          bgcolor: "#000"
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            ...(open && { display: "none" })
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          align="center"
          sx={{ flexGrow: 1 }}
        >
          Back Pocket
        </Typography>
        <SignOutButton />
        <AreYouLoggedIn />
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
