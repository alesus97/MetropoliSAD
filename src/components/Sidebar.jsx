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
  Menu
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Movie, Chair, Dashboard, Adb} from "@mui/icons-material";



const Sidebar = ({ children }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const menuItem = [
    {
      name: "Palinsesto",
      icon: <Dashboard color="primary" />,
      onClick: () => {
        navigate("/palinsesto", { replace: true });
      },
    },
    {
      name: "Film",
      icon: <Movie color="primary" />,
      onClick: () => {
        navigate("/film", { replace: true });
      },
    },
    {
      name: "Sale",
      icon: <Chair color="primary" />,
      onClick: () => {
        navigate("/sale");
      },
    },
    {
      name: "Product",
      icon: <Chair color="primary" />,
      onClick: () => {
        navigate("/product");
      },
    },
    {
      name: "Product List",
      icon: <Chair color="primary" />,
      onClick: () => {
        navigate("/productList");
      },
    },
  ];
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ zIndex: theme.zIndex.drawer + 1, width: "100%" }}
      >
        <Toolbar >
        <Adb sx={{ display: { color:'inherit'}, ml:"1%" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: "1.3%",
             
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.4rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MEGLIO DELL'UCI CINEMAS
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: { width: "15%" },
        }}
        variant="permanent"
        
        anchor="left"
       
      >
        <Divider color={theme.palette.primary.main} />
        <List >
        <Typography variant="h6" component="div" sx={{ml:"30%"}}>
            AppBar
          </Typography>
          <Toolbar/>
          {/* <Divider sx={{paddingTop:3}}/> */}
          {menuItem.map((item, index) => {
            return (
              <ListItem button key={index} onClick={item.onClick} >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText variant="title" primary={item.name} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      <div> {children}</div>
    </div>
  );
};

export default Sidebar;
