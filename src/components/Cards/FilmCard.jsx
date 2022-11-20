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
  CardActionArea


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
    <Card raised sx={{maxWidth: "450px", height: "100%"}}>



              <CardActionArea>
                <CardMedia 
                  component="img"
                  height="350"
                  image={props.info.image_url}
                  title={props.info.titolo}
                  sx={{objectFit:'cover', objectPosition:'50% 50%'}}
                />
              </CardActionArea>


              <CardActions >
              <IconButton onClick={() => props.onDeleteAction()}>
                <DeleteIcon  color="primary" />
                </IconButton>
                <Button style={{marginLeft:'auto'}} onClick={() => props.openExploreAction()}variant="text">Details</Button>
              </CardActions>
       

   
{/*    <CardActions> 

      <IconButton onClick={() => props.onDeleteAction()}>
      <DeleteIcon  color="primary" />
      </IconButton>
      <Button style={{marginLeft:'auto'}} onClick={() => props.openExploreAction()}variant="text">Details</Button>
 
      </CardActions> */}
    </Card>
  );
}
