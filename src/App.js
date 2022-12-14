import React from "react";
import { privateRoutes } from "./navigation/routes";
import "./App.css"
import CinemaAppBar from "./components/CinemaAppBar";
import AppRoutes from "./navigation/AppRoutes";
import { 
  Box, 
  Drawer, 
  List, 
  Toolbar, 
  ListItemText, 
  ListItemIcon, 
  useMediaQuery,
  ListItemButton,
  } from "@mui/material";
import {theme} from "./utils/theme"
import { useNavigate, useLocation } from "react-router-dom";
import useUser from "./utils/useUserHook";

const App = () => {
 const {user, error} = useUser();

  const { pathname } = useLocation();
  const navigate = useNavigate()
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const drawerItems = privateRoutes.filter((element) => element.permission.includes(user?.role) )
  .map((item, index) => {
    return (
      <ListItemButton selected={item.path === pathname} key={index} onClick={() => navigate(item.path, { replace: true })} data-cy={"page-"+item.path}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText variant="title" primary={item.name} />
      </ListItemButton>
    );
  })

  return ( 
    <Box sx={{ display: "flex"}}>
 
   { user?.role && 
   <>
   <CinemaAppBar/>
        <Drawer
        variant="permanent" //{isMdUp ? "permanent" : "temporary"}
        anchor="left"
        sx={{
          width: theme.layout.drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: theme.layout.drawerWidth, boxSizing: "border-box" },
          
        }}
      >
        <Box  sx={{ overflow: "auto"}}>
          <List >
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
