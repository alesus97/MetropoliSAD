import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { IconButton } from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { useTheme } from "@mui/styles";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function FilmCard(props) {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={props.info.copertina} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {props.info.titolo}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {props.info.genere}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {123}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={props.onDeleteAction}>
                <DeleteOutlineOutlined />

                {/* <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography> */}
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
