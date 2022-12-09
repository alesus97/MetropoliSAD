import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button, 
  CardActions,
  Typography,
  IconButton,
  CardMedia,
  CardHeader,
  Card
} from '@mui/material';


export default function CinemaCard(props) {

  return (
    <Card raised sx={{ maxWidth: 500}}>
      <CardMedia
        component="img"
        height="250"
        image="https://www.romasette.it/wp-content/uploads/film-1.jpg"
      />
      <CardHeader
        title={
            
              <Typography align="center" variant="body1" > {props.info.nome}</Typography>
             
        }
      />
      <CardActions>
        <IconButton onClick={() => props.onDeleteAction()}>
          <DeleteIcon color="primary" />
        </IconButton>
        <Button
          style={{ marginLeft: "auto" }}
          onClick={() => props.openExploreAction()}
          variant="text"
        >
          Dettagli
        </Button>
      </CardActions>
       
    </Card>
  );
}
