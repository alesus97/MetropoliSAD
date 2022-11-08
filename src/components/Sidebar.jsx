import React from "react";
import {
  ListItemText,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  useTheme
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Movie, Chair, Dashboard } from "@mui/icons-material";

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
        sx={{ zIndex: theme.zIndex.drawer + 1, width: "80%" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            AppBar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: { width: "20%" },
        }}
        variant="permanent"
        // className={classes.drawer}
        anchor="left"
        // classes={{ paper: classes.drawerPaper }}
      >
        {/* <Divider color={theme.palette.primary.main} /> */}
        <List>
          {menuItem.map((item, index) => {
            return (
              <ListItem button key={index} onClick={item.onClick}>
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
