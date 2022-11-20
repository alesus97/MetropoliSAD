import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DialogConfermaEliminazione() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Confermando, questo elemento verrà eliminato anche nelle altre
            schermate !
          </DialogContentText>
        </DialogContent>
        

  );
}
