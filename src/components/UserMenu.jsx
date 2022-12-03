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
import { Settings } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";



export default function UserMenu(){
const navigate = useNavigate();
const dispatch = useDispatch();

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
            dispatch(logout())
            /* localStorage.removeItem("roles"); */

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
          <IconButton color="inherit" onClick={handleOpenUserMenu}>
              <Settings/>
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