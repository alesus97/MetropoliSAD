import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#F9D159',
    },
    secondary: {
      main: '#5981f9',
      contrastText: '#ffffff',
      dark: '#415eb5',
      light: '#5b84ff',
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
    error: {
      main: '#f54336',
      light: '#fb685e',
      dark: '#ad2f26',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9700',
      light: '#ffab31',
      dark: '#b76b00',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    info: {
      main: '#2196f3',
      light: '#4dabf5',
      dark: '#186bad',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4caf50',
      light: '#6ebd72',
      dark: '#357938',
      contrastText: 'rgba(0,0,0,0.87)',
    },
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