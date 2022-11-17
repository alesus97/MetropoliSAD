import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
        alt="Paella dish"
      />
      <CardHeader
        title={
            <Grid container spacing={1}>
            <Grid item xs={7}>
              <Typography align="center" variant="h6" >Hall {props.info.numero_sala}</Typography>
            </Grid>
            <Grid item >
              <Typography align="center" variant="h6" >{props.info.capienza} Seats</Typography>
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
