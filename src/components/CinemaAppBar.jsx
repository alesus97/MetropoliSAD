

import { AppBar, Typography, Box, Toolbar } from "@mui/material";
import { Adb, Settings } from "@mui/icons-material";
import UserMenu from "./UserMenu";
export default function CinemaAppBar(){
    
    return(
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
            href="/schedule"
            sx={{
              ml: "1.3%",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".4rem",
              color: "inherit",
              textDecoration: "none",
            
            }}
            
          >
            METROPOLISAD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          </Box>
           
         <UserMenu/>
          
        </Toolbar>
        
      </AppBar>

    );
}