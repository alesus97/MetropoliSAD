import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#F9D159',       
        },
        secondary: {
          main: '#5981f9',
        },
        background: {
          default: '#17191a',
          paper: '#292828',
        },
        text: {
          primary: '#ffffff',
          secondary: '#ffffff',
          disabled: 'rgba(74,72,72,0.5)',
          hint: 'rgba(57,57,57,0.5)',
        },
        divider: '#F9D159',
      },
      props: {
        MuiAppBar: {
          color: 'default',
        },
      },
    layout:{
        drawerWidth: 240
    },
    
  })