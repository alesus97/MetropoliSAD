import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';



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
    <Card raised  >
      
      <CardMedia sx={{width:"100%", margin:"auto"}} 
        component="img"
       
        // height="30%"
       // image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Il_Muro_-_FIlm_2019_-_Locandina.jpg/429px-Il_Muro_-_FIlm_2019_-_Locandina.jpg"
      //  image="https://www.lascimmiapensa.com/wp-content/uploads/2017/04/jeeg-robot-1.jpg"
         image={props.info.image_url}
      /> 
      <CardContent>
        <Typography  gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        {props.info.titolo}
        </Typography> 
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
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
          <Typography paragraph>
          {props.info.trama}
          </Typography>
          
        </CardContent>
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
          Dettagli
          </Typography>
      </CardActions>
    </Card>
  );
}
