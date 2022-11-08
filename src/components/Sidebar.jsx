import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { ListItemText } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import {makeStyles} from '@mui/styles';
import MenuAppBar from './AppBar';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';


import React, { useState } from 'react';
import {
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { Dashboard } from '@mui/icons-material';

const drawerWidth = 240;


const useStyles = makeStyles({
page: {
    background: '#f9f9f9',
    width: '100%'
    },
    drawer:{
        width: drawerWidth
    },
    drawerPaper:{
        width: drawerWidth
    },
    root:{
        display: 'flex'
    }
    });
    

const Sidebar = ({children}) => {
    const classes = useStyles();
    const navigate  = useNavigate();
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            name:"Palinsesto",
            icon:<Dashboard />,
            onClick:() => {navigate('/palinsesto')}
        },
        {
            name:"Film",
            icon:<FaRegChartBar/>,
            onClick:() => {navigate('/film', {replace: true})}
        },
        {
            name:"Comment",
            icon:<FaCommentAlt/>,
            onClick:() => {navigate('/comment')}
        },
        {
            name:"Product",
            icon:<FaShoppingBag/>,
            onClick:() => {navigate('/product')}
        },
        {
            name:"Product List",
            icon:<FaThList/>,
            onClick:() => {navigate('/productList')}
        }
    ]
  return (

    

    <Box sx={{ display: 'flex' }}>
      
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
           AppBar
          </Typography>
        </Toolbar>
      </AppBar> */}
      <MenuAppBar/>


   
     
      <Drawer variant="permanent" className={classes.drawer} anchor="left" classes={{paper: classes.drawerPaper}}>
        <Toolbar/>
        <Divider/>
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
    <div>
      {children}
    </div>

     </Box>
  );
}

export default Sidebar;