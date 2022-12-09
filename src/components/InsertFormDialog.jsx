import * as React from "react";
import {
  Dialog, 
  DialogContent, 
  DialogTitle,
  Alert, 
  Button, 
  Container, 
  Stack, 
  Divider,
  Box,
  Fade
 } from "@mui/material";

import { useState } from "react";
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
      setErrorMessage(error.response.data.message);
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
        <DialogTitle align='center' color='primary'>{props.title}</DialogTitle>
        <Divider light/>
          <DialogContent>
            <Container component="main" maxWidth="sm">
              <Box
                component="form"
                onSubmit={handleOK}
              >
           
                {props.children}



                <Fade
                    in={iserror} //Write the needed condition here to make it appear
                    timeout={{ enter: 1000, exit: 1000 }} //Edit these two values to change the duration of transition when the element is getting appeared and disappeard
                    addEndListener={() => {
                      setTimeout(() => {
                        console.log("prova")
                        setIsDisabled(false)
                        setIserror(false);
                      }, 4000);
                    }}
                  >
                    
                    <Alert
                       variant="filled"
                       color="primary"
                       icon={<Error fontSize="inherit" />}
                    >
                      
                      {errorMessage}
                    </Alert>
                  </Fade>


                {/* {iserror ? <Alert variant="filled" color="primary" icon={<Error fontSize="inherit"/>}>{errorMessage}</Alert> : <></>} */}
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