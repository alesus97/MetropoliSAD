import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {FormControl, Select} from '@mui/material';
import { styled } from '@mui/styles';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add'
import { Button, Container, Fab, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
  }})

export default function InsertSpettacoloFormDialog(props) {
  
  const [film, setFilm] = useState([]);
  const [sale, setSale] = useState([]);
 

  
  

 
  const handleClose = () => {
    props.setCloseDialog()
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      titolo: data.get("")

    });
  };

  useEffect(() => {
    axios
      .get(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/film`
      )
      .then((res) => {
        setFilm(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/1/sale`
      )
      .then((res) => {
        setSale(res.data);
      });
  }, []);

  const [currency ] = React.useState('DATA');
 
  return (
    <div>
   

      

      <Dialog open={props.openDialog} fullWidth maxWidth="sm" onClose={handleClose}>

       <DialogTitle align="center">
       Inserisci Spettacolo
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

          {/* <CustomTextField
            margin="normal"
            //required
            fullWidth
            id="email"
            label="Data di uscita"
            name="email"
            type="date"
          //  autoComplete="email"
            variant='standard'
            focused
                    
          label="Data di uscita"
          value={currency}
          type="date"
          margin="normal"
          fullWidth
          variant="standard"
          autoFocus
          /> */}

      <Box>
      <TextField
        //label="Data di uscita"
        
        variant="standard"
        type="date"
      
      />
     
    </Box>
          
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
        <InputLabel>Titolo</InputLabel>
      <Select type="submit" fullWidth defaultValue=""  >
          {film.map((film, index) => (
              <MenuItem key={index} value={film}>{film.titolo}</MenuItem>
          ))}
        </Select>
      </FormControl>
          
          
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
              <InputLabel>Sala</InputLabel>
          <Select  fullWidth defaultValue="">
            {sale.map((sala, index) => (
                <MenuItem key={index} value={sala}>{sala.numero_sala}</MenuItem>
            ))}
          </Select>
          </FormControl>
          
         
          
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" >Ok</Button>

        </Box>
        </Container>
        </DialogContent>
      </Dialog>
    </div> 
    
  );
}













