import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add'
import { Button, Container, Fab } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Fab variant= "extended" onClick={handleClickOpen}>
      <AddIcon sx={{mr:1}}/>
      Create new
      </Fab> 

      <Dialog open={open} fullWidth maxWidth="sm" onClose={handleClose}>

       <DialogTitle align="center">
       Inserisci dettagli film
       </DialogTitle>
        <DialogContent>
          
          <Container component="main" maxWidth="xs">
        <Box 
      sx={{
        alignItems:"center",
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '50ch' },
      }}
    >

          <TextField
            label="Titolo"
            fullWidth
            margin="normal"
            variant="standard"
            focused
          />
          <TextField
            label="Genere"
            fullWidth
            margin="normal"
            variant="standard"
            focused
          />
          <TextField
            label="Cast"
            fullWidth
            margin="normal"
            variant="standard"
            focused
          />
          <TextField
            label="Regia"
            fullWidth
            margin="normal"
            variant="standard"
            focused
          />
          <TextField
            label="Produttore"
            fullWidth
            margin="normal"
            variant="standard"
            focused
          />
          <TextField
            label="Data di uscita"
            fullWidth
            margin="normal"
            variant="standard"
            type="date"
            focused
          />
          <TextField
            label="Durata"
            fullWidth
            margin="normal"
            variant="standard"
            type="number"
            focused
          />
          <TextField
            label="Trama"
            fullWidth
            margin="normal"
            variant="standard"
            multiline
            rows={2}
            focused
          />
          <TextField
            label="Locandina"
            fullWidth
            margin="normal"
            variant="standard"
            type="url"
            focused
          />

          
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













