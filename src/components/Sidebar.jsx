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
  useMediaQuery,
  Box,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import { Movie, Chair, Dashboard, Adb } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';




const settings = [
  {
    name:"Account",
    icon: <PersonIcon color="primary"/>,
  },
  {
    name:"Logout",
    icon: <LogoutIcon color="primary"/>,
  },
 
];


const Sidebar = ({ children }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const menuItem = [
    {
      name: "Schedule",
      path: "/schedule",
      icon: <Dashboard color="primary" />,
      onClick: () => {
        navigate("/schedule", { replace: true });
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
      name: "Hall",
      path: "/hall",
      icon: <Chair color="primary" />,
      onClick: () => {
        navigate("/hall");
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

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const {pathName} = useLocation()
  return (
    // <div>
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
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
            MEGLIO DELL'UCI CINEMA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/> 
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '50px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <ListItemIcon>{setting.icon}</ListItemIcon>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
        
      </AppBar>
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
