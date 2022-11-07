import React, {useState, useEffect} from 'react';
import FilmCard from '../components/Card';
import axios from 'axios';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

import FormDialog from '../components/Dialog';


export default function Analytics() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [infoS,setInfoS] = useState([]);
  

  useEffect(() => {
    axios.get(`https://6368e35028cd16bba70f1e8a.mockapi.io/film`)
      .then(res => {
        const infoS = res.data;
        setInfoS(infoS);
        console.log(infoS); 
      })
  }, [])


    return (
      <div>
      <FormDialog/>

      <Container>
        <Grid container spacing={3}>
        {
          infoS.map((info,index) => ( 
            <Grid item key={info.titolo} xs={12} md={6} lg={4}>
              <FilmCard info = {info} gridIndex = {index}></FilmCard>
            </Grid>
        ))
      }
        </Grid>

      </Container>
     </div>
      
    );
};