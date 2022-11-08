import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add'
import { Button, Container, Fab } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  return (
    <div>
    <Fab variant= "extended" onClick={handleClickOpen}>
      <AddIcon sx={{mr:1}}/>
      Create new
      </Fab> 

      <Dialog open={open} fullWidth maxWidth="sm" onClose={handleClose}>
       <DialogTitle>Inserisci dettagli film</DialogTitle>
        <DialogContent>
          <Container component="main" maxWidth="xs">
        <Box 
      sx={{
        alignItems:"center",
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >

<TextField
  label="CIAO ALESSIO"
  fullWidth
  margin="normal"

  variant="standard"
  color="warning"
  focused
/>



          <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Titolo
        </InputLabel>
         <BootstrapInput defaultValue="titolo" id="bootstrap-input" /> 
      </FormControl>
        
     <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Genere
        </InputLabel>
         <BootstrapInput defaultValue="genere" fullWidth id="bootstrap-input" /> 
      </FormControl>
       
       
    
     <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Cast
        </InputLabel>
         <BootstrapInput defaultValue="cast" id="bootstrap-input" /> 
      </FormControl>
    

     
     <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Regia
        </InputLabel>
         <BootstrapInput defaultValue="regia" id="bootstrap-input" /> 
      </FormControl>
     
     <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Produttore
        </InputLabel>
         <BootstrapInput defaultValue="produttore" id="bootstrap-input" /> 
      </FormControl>
     
     <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Data di uscita
        </InputLabel>
         <BootstrapInput type="date" id="bootstrap-input" /> 
      </FormControl>
     
     <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Durata
        </InputLabel>
         <BootstrapInput type="number" id="bootstrap-input" /> 
      </FormControl>
    
     <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Trama
        </InputLabel>
         <BootstrapInput defaultValue="trama"  multiline
          rows={4} id="bootstrap-input" /> 
      </FormControl>
     
     <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Locandina
        </InputLabel>
         <BootstrapInput type="url" defaultValue="https://example.com" id="bootstrap-input" /> 
      </FormControl>
          </Box>
          </Container>

        
      </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div> 
    
  );
}













