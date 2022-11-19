import * as React from 'react';
import { styled, 
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Stack,
  Button,
  CardHeader,


 } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import Scrollbars from 'rc-scrollbars';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));




export default function FilmCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card raised>
        <CardContent style={{textAlign:'center'}}> 
        {props.info.titolo}
        </CardContent>

      <CardMedia height="300"
        component="img"
         image={props.info.image_url}
      /> 
   
   <CardActions> 

      <IconButton onClick={() => props.onDeleteAction()}>
      <DeleteIcon  color="primary" />
      </IconButton>
      <Button style={{marginLeft:'auto'}} onClick={() => props.openExploreAction()}variant="text">Details</Button>
 
      </CardActions>
    </Card>
  );
}
