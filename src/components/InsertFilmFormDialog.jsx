import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add'
import { Button, Container, Fab } from '@mui/material';
import Box from '@mui/material/Box';



export default function InsertFilmFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    console.log({
      titolo: data.get("email")
    });
  };

  return (
    <div>
    {/* <Fab variant= "extended" onClick={handleClickOpen}>
      <AddIcon sx={{mr:1}}/>
      Create new
      </Fab>  */}

      <Fab color="primary" aria-label="add" onClick={handleClickOpen}  >
        <AddIcon/>
      </Fab>

      <Dialog open={open} fullWidth maxWidth="sm" onClose={handleClose}>

       <DialogTitle align="center">
       Inserisci dettagli film
       </DialogTitle>
        <DialogContent>
          
          <Container component="main" maxWidth="xs">
        <Box 
            component="form"
            onSubmit={handleSubmit}
            sx={{
              alignItems:"center",
              display: 'flex',
              flexDirection: 'column',
              '& .MuiTextField-root': { width: '50ch' },
            }}
    >
          <TextField
            margin="normal"
            //required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            // type="url"
            focused
          />
          
         
      
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" >Ok</Button>

        </Box>
        </Container>
        </DialogContent>
      </Dialog>
    </div> 
    
  );
}













