import * as React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  IconButton,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";



export default function FilmCard(props) {

  return (
    <Card raised sx={{ maxWidth: "450px", height: "100%" }}>
      <CardMedia
        component="img"
        height="350"
        image={props.info.image_url}
        title={props.info.titolo}
        sx={{ objectFit: "cover", objectPosition: "50% 50%" }}
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
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
