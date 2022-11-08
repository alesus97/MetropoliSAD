
import Drawer from "@mui/material/Drawer";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { ListItemText, Stack } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { createStyles, makeStyles } from "@mui/styles";

import { useNavigate } from "react-router-dom";
import { Movie, Chair } from "@mui/icons-material";
import React, { useState } from "react";
import { Dashboard } from "@mui/icons-material";

import { useTheme } from "@mui/material";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    page: {
      background: "#f9f9f9",
      width: "100%",
    },
    drawer: {
      width: theme.layout.drawerWidth,
      zIndex: theme.zIndex.root + 1
    },
    drawerPaper: {
      width: "inherit",
      backgroundColor: theme.palette.background.paper,
     // paddingTop: 64
     
    },
    appBar:{
      zIndex: theme.zIndex.drawer + 1
    },
    root: {
      display: "flex",
    },
     appContent: {
       flex: "1 1 100%", // https://github.com/philipwalton/flexbugs#flexbug-17
       maxWidth: "100%", // https://github.com/philipwalton/flexbugs#flexbug-17
      paddingTop: 80, // equal to AppBar height + 16px
       margin: "0 auto",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
       paddingRight: theme.spacing(3),
      },
    }
  })
);

// const useStyles = makeStyles({
//   page: {
//     background: "#f9f9f9",
//     width: "100%",
//   },
//   drawer: {
//     width: drawerWidth,
//   },
//   drawerPaper: {
//      width: drawerWidth,
//   },
//   root: {
//     display: "flex",
//   },
//   appContent: {
//     // flex: "1 1 100%",
//      MaxWidth: "100%",
//     paddingTop: 90,
//     // margin: "0 auto",
//   },
// });

const Sidebar = ({ children }) => {

  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      name: "Palinsesto",
      icon: <Dashboard color="primary"/>,
      onClick: () => {
        navigate("/palinsesto",{replace: true});
      },
    },
    {
      name: "Film",
      icon: <Movie color="primary"/>,
      onClick: () => {
        navigate("/film", { replace: true });
      },
    },
    {
      name: "Sale",
      icon: <Chair color="primary"/>,
      onClick: () => {
        navigate("/sale");
      },
    },
    {
      name: "Product",
      icon: <Chair color="primary"/>,
      onClick: () => {
        navigate("/product");
      },
    },
    {
      name: "Product List",
      icon: <Chair color="primary"/>,
      onClick: () => {
        navigate("/productList");
      },
    },
  ];
  return (
    <div>
    <AppBar
        position="fixed"
          sx={{ zIndex: theme.zIndex.drawer + 1, width: "80%"}}
      >
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            Photos
          </Typography>
        </Toolbar>
    </AppBar>
      <Drawer PaperProps={{
         sx:{width: "20%"}
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
