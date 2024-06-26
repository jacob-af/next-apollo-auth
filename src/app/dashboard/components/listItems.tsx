import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LiquorIcon from "@mui/icons-material/Liquor";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import Link from "next/link";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} href="/dashboard" sx={{ color: "#FFF" }}>
      <ListItemIcon>
        <HomeIcon sx={{ color: "#FFF" }} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} href="/dashboard/recipe">
      <ListItemIcon>
        <LocalBarIcon sx={{ color: "#FFF" }} />
      </ListItemIcon>
      <ListItemText primary="Recipes" />
    </ListItemButton>
    <ListItemButton component={Link} href="/dashboard/recipeBook">
      <ListItemIcon>
        <MenuBookIcon sx={{ color: "#FFF" }} />
      </ListItemIcon>
      <ListItemText primary="RecipeBooks" />
    </ListItemButton>
    <ListItemButton component={Link} href="/dashboard/inventory">
      <ListItemIcon>
        <LiquorIcon sx={{ color: "#FFF" }} />
      </ListItemIcon>
      <ListItemText primary="Inventory" />
    </ListItemButton>
    <ListItemButton component={Link} href="/dashboard/crew">
      <ListItemIcon>
        <GroupsIcon sx={{ color: "#FFF" }} />
      </ListItemIcon>
      <ListItemText primary="Crew" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader
      component="div"
      inset
      sx={{ color: "#FFF", bgcolor: "#000" }}
    >
      Recent:
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon sx={{ color: "#FFF" }} />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon sx={{ color: "#FFF" }} />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon sx={{ color: "#FFF" }} />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
