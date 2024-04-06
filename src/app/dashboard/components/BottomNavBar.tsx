import React from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LiquorIcon from "@mui/icons-material/Liquor";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import Link from "next/link";

function BottomNavBar() {
  const [value, setValue] = React.useState("home");

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { sm: "none" }
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        sx={{
          bgcolor: "#000",
          "&& .Mui-selected": {
            color: "orange"
          }
        }}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          component={Link}
          href="/"
          icon={<HomeIcon />}
          sx={{
            color: "#FFF"
          }}
        />
        <BottomNavigationAction
          label="RecipeBooks"
          value="recipeBooks"
          component={Link}
          href="/recipeBook"
          icon={<MenuBookIcon />}
          sx={{
            color: "#FFF",
            px: 0
          }}
        />
        <BottomNavigationAction
          label="Recipes"
          value="recipes"
          component={Link}
          href="/recipe"
          icon={<LocalBarIcon />}
          sx={{
            color: "#FFF"
          }}
        />
        <BottomNavigationAction
          label="Inventory"
          value="inventory"
          component={Link}
          href="/inventory"
          icon={<LiquorIcon />}
          sx={{
            color: "#FFF"
          }}
        />
        <BottomNavigationAction
          label="Crew"
          value="crew"
          component={Link}
          href="/crew"
          icon={<GroupsIcon />}
          sx={{
            color: "#FFF"
          }}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNavBar;
