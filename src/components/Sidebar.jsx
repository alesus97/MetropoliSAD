import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { ListItemText } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { makeStyles } from "@mui/styles";
import MenuAppBar from "./AppBar";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import {
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { Dashboard } from "@mui/icons-material";
import { Container } from "@mui/system";

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
     width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  appContent: {
    // flex: "1 1 100%",
     MaxWidth: "100%",
    paddingTop: 90,
    // margin: "0 auto",
  },
});

const Sidebar = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      name: "Palinsesto",
      icon: <Dashboard />,
      onClick: () => {
        navigate("/palinsesto");
      },
    },
    {
      name: "Film",
      icon: <FaRegChartBar />,
      onClick: () => {
        navigate("/film", { replace: true });
      },
    },
    {
      name: "Sale",
      icon: <FaCommentAlt />,
      onClick: () => {
        navigate("/sale");
      },
    },
    {
      name: "Product",
      icon: <FaShoppingBag />,
      onClick: () => {
        navigate("/product");
      },
    },
    {
      name: "Product List",
      icon: <FaThList />,
      onClick: () => {
        navigate("/productList");
      },
    },
  ];
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CssBaseline />

      <MenuAppBar />

      <Drawer
        variant="permanent"
        className={classes.drawer}
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <Divider />
        <List>
          {menuItem.map((item, index) => {
            return (
              <ListItem button key={index} onClick={item.onClick}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
 
    <div className={classes.appContent}>{children}</div>

    </Box>
  );
};

export default Sidebar;
