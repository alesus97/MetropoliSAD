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

  const handleSubmit = (event) => {
    setIsDisabled(true);

    props.handleSubmit(event)
    .then( () => {
      console.log("Bell GIUA OK")
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
            <Container component="main" maxWidth="xs">
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  "& .MuiTextField-root": { width: "50ch" },
                }}
              >
           
                {props.children}

                {iserror ? <Alert variant="filled" color="primary" icon={<Error fontSize="inherit"/>}>{errorMessage}</Alert> : <></>}
                <p></p>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    type="submit"
                    disabled={isDisabled}
                  >
                    Ok
                  </Button>
                  <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button>
                </Stack>
              </Box>
            </Container>
          </DialogContent>
        </Dialog>
      </div>
    );
}