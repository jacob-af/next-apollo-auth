"use client";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { drawerWidth } from "../layout";

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open"
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    [theme.breakpoints.up("sm")]: {
      position: "relative"
    },
    whiteSpace: "nowrap",
    width: drawerWidth,

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.only("xs")]: {
        display: "none"
      },
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
        position: "relative"
      }
    })
  }
}));
