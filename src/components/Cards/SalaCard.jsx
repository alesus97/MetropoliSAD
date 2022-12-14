import * as React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';

import {
  Grid,
  Typography,
  IconButton,
  CardMedia,
  CardHeader,
  Card
} from '@mui/material';

export default function SalaCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card raised sx={{ maxWidth: 500}}>
      <CardMedia
        component="img"
        height="250"
        image="https://www.bolognatoday.it/~media/horizontal-hi/43572212541236/cinema-8-2-2.jpg"
      />
      <CardHeader
        title={
            <Grid container spacing={1}>
            <Grid item xs={7}>
              <Typography align="center" variant="body1" >Sala {props.info.numero_sala}</Typography>
            </Grid>
            <Grid item >
              <Typography align="center" variant="body1" >{props.info.capienza} Posti</Typography>
            </Grid>
          </Grid>  
        }
        action={
          <IconButton onClick={() => props.onDeleteAction()}>
          <DeleteIcon  color="primary" />
          </IconButton>
        }
       
      />
       
    </Card>
  );
}
