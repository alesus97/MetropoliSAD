import * as React from "react";

import {
  DialogContent, 
  DialogContentText
} from "@mui/material";



export default function DialogConfermaEliminazione(props) {


  return (

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.onDeleteMessage}
          </DialogContentText>
        </DialogContent>
        

  );
}
