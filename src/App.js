import React from "react";
import { privateRoutes } from "./navigation/routes";
import "./App.css"
import CinemaAppBar from "./components/CinemaAppBar";
import AppRoutes from "./navigation/AppRoutes";
import { isLoggedIn } from "./navigation/utils";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice";
import { Box, 
  Drawer, 
  List, 
  Toolbar, 
  ListItemText, 
  ListItemIcon, 
  ListItem,
  useMediaQuery
  } from "@mui/material";
import {theme} from "./constants/theme"
import { useNavigate, useLocation } from "react-router-dom";

const App = () => {
   window.addEventListener('storage', ({oldValue, newValue}) => {
    localStorage.setItem('roles', oldValue);
  });


  const user = useSelector(selectUser)
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const drawerItems = privateRoutes.filter((element) => element.permission.includes(user?.role) )
  .map((item, index) => {
    return (
      <ListItem selected={item.path === pathname} button key={index} onClick={() => navigate(item.path, { replace: true })}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText variant="title" primary={item.name} />
      </ListItem>
    );
  })

  return ( 
    <Box sx={{ display: "flex"}}>
 
   { user?.role && 
   <>
   <CinemaAppBar/>
        <Drawer
        
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
              {drawerItems}
          </List>
        </Box>
      </Drawer>
      </>
      }
 

  <Box component="main" sx={{ flexGrow: 1}}>
      {user?.role &&  <Toolbar/>}
        <AppRoutes/>
    </Box>
</Box>


   );
};

export default App;
