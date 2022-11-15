import React from "react";
import {
    Typography,
    ListItemIcon,
    Box,
  } from "@mui/material";
  
  
  import Avatar from "@mui/material/Avatar";
  import IconButton from "@mui/material/IconButton";
  import Menu from "@mui/material/Menu";
  import MenuItem from "@mui/material/MenuItem";
  import Tooltip from "@mui/material/Tooltip";
  import LogoutIcon from '@mui/icons-material/Logout';
  import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

export default function UserMenu(){
const navigate = useNavigate();
    const items = [
        {
          name:"Account",
          icon: <PersonIcon color="primary"/>,
        },
        {
          name:"Logout",
          icon: <LogoutIcon color="primary"/>,
          onClick: () => {
            localStorage.removeItem("ReactAmplify.TokenKey");
            localStorage.setItem("auth",false);
            console.log("PROVA")
            navigate("/", { replace: true });
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

    return(
        
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
          {items.map((item, index) => (
            <MenuItem key={index} onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Typography textAlign="center">{item.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );

}