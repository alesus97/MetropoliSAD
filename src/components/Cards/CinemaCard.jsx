import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, CardActions} from '@mui/material';
export default function CinemaCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
