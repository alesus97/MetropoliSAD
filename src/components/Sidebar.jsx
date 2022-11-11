import React, { useState } from "react";
import {
  ListItemText,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  useTheme,
  Divider,
  IconButton,
  Menu,
  useMediaQuery,
  Box,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import { Movie, Chair, Dashboard, Adb } from "@mui/icons-material";

const Sidebar = ({ children }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const menuItem = [
    {
      name: "Palinsesto",
      path: "/palinsesto",
      icon: <Dashboard color="primary" />,
      onClick: () => {
        navigate("/palinsesto", { replace: true });
      },
    },
    {
      name: "Film",
      path: "/film",
      icon: <Movie color="primary" />,
      onClick: () => {
        navigate("/film", { replace: true });
      },
    },
    {
      name: "Sale",
      path: "/sale",
      icon: <Chair color="primary" />,
      onClick: () => {
        navigate("/sale");
      },
    },
    {
      name: "Product",
      path: "/product",
      icon: <Chair color="primary" />,
      onClick: () => {
        navigate("/product");
      },
    },
    {
      name: "Product List",
      path: "/productList",
      icon: <Chair color="primary" />,
      onClick: () => {
        navigate("/productList");
      },
    },
  ];

  // const {pathName} = useLocation()
  return (
    // <div>
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        // sx={{ zIndex: theme.zIndex.drawer + 1, width: "100%" }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Adb sx={{ display: { color: "inherit" } }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: "1.3%",

              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".4rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MEGLIO DELL'UCI CINEMAS
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        // PaperProps={{
        //   sx: { width: "15%" },
        // }}
        variant={isMdUp ? "permanent" : "temporary"}
        anchor="left"
        sx={{
          width: theme.layout.drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: theme.layout.drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Toolbar />

            {menuItem.map((item, index) => {
      
              return (
                <ListItem /*selected={item.path === pathName}*/ button key={index} onClick={item.onClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText variant="title" primary={item.name} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
