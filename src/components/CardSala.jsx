import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';

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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500}}>
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
              <Typography align="center" variant="h6">Sala 1</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography align="center" variant="h6">12 posti</Typography>
            </Grid>
          </Grid>  
        }
       
      />
       
    </Card>
  );
}