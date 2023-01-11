import React from "react";
import {
    Typography,
    ListItemIcon,
    Box,
} from "@mui/material";
   
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import {Logout, Person, Settings} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";



export default function UserMenu(){
const navigate = useNavigate();
    const items = [
        /* {
          name:"Account",
          icon: <Person color="primary"/>,
          onClick : () => {
           
          }
        }, */
        {
          name:"Logout",
          icon: <Logout color="primary"/>,
          onClick: async () => {

            try {
              await Auth.signOut({ global: true });
          } catch (error) {
              console.log('error signing out: ', error);
          }

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