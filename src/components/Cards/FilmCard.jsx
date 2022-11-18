import * as React from 'react';
import { styled, 
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography, Box

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
    <Card raised   >
      
      <CardMedia height="350"
        component="img"
         image={props.info.image_url}
      /> 
      <CardContent>
        <Typography  gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        {props.info.titolo}
        </Typography> 

        </CardContent>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
{/*         <CardContent> */}
        <Box justifyContent={'flex-start'} sx={{ml:2, mr:2}} > 
        <Typography paragraph variant="body1">
         {props.info.genere}
        </Typography>

        <Typography paragraph variant="body1">
        {props.info.durata}
        </Typography>

        <Typography paragraph variant="body1">
        {props.info.regia}
        </Typography>

        <Typography paragraph variant="body1">
  
        {props.info.produttore}
        </Typography>

        <Typography paragraph variant="body1">
        {props.info.data_uscita}
        </Typography>

        <Typography paragraph variant="body1">
        {props.info.codice_film}
        </Typography>
      
          <Typography paragraph >Trama:</Typography>


          <Scrollbars color="primary" style={{ height: 300 }} >
          <Box sx={{mr:1, ml:1}}>{props.info.trama}</Box>
          </Scrollbars>
          </Box>
    {/*       
        </CardContent> */}
      </Collapse>
     
      <CardActions disableSpacing>

      <IconButton onClick={() => props.onDeleteAction()}>
      <DeleteIcon  color="primary" />
      </IconButton>
      
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon color="primary"/>
        </ExpandMore>
        <Typography variant="body2"  color="primary">
          Details
          </Typography>
      </CardActions>
    </Card>
  );
}
