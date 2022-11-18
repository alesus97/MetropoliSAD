import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert, Button, Container, Stack } from "@mui/material";
import Box from "@mui/material/Box";

import { Error } from "@mui/icons-material";


export default function InsertFormDialog(props) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [iserror, setIserror] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const handleClose = () => {
    props.setCloseDialog();
    setIserror(false);
    setErrorMessage("");
  };


  const handleOK = (event) => {
    setIsDisabled(true);

    props.handleOK(event)
    .then( () => {
      setIsDisabled(false);
      handleClose();
      setIserror(false);
      setErrorMessage("");
    })
    .catch( (error)=>{
      console.log(error)
      setIserror(true);
      setErrorMessage(error.message);
    })
  }


    return (
      <div>
        <Dialog
          open={props.openDialog}
          fullWidth
          maxWidth="sm"
          onClose={handleClose}
        >
          <DialogTitle align="center">{props.title}</DialogTitle>
          <DialogContent>
            <Container component="main" maxWidth="sm">
              <Box
                component="form"
                onSubmit={handleOK}
              >
           
                {props.children}

                {iserror ? <Alert variant="filled" color="primary" icon={<Error fontSize="inherit"/>}>{errorMessage}</Alert> : <></>}
                <p></p>
                <Stack justifyContent='flex-end' direction="row" spacing={2}>
                <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button
                    variant="outlined"
                    type="submit"
                    disabled={isDisabled}
                  >
                    Ok
                  </Button>
                </Stack>
              </Box>
            </Container>
          </DialogContent>
        </Dialog>
      </div>
    );
}