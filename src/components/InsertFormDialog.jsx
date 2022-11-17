import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert, Button, Container, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { Error } from "@mui/icons-material";
import DialogSpettacolo from "./Dialogs/DialogSpettacolo";
import DialogFilm from "./Dialogs/DialogFilm";
import DialogSala from "./Dialogs/DialogSala";
import createJsonData from "./DialogHelper";


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
    
     const {postData,link, viewData} = createJsonData(event, props.formType);
    
     axios.post(
      `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com${link}`,
      postData
    ).then((response) => {
      console.log(response)
      props.onAdd(postData, response, viewData)

      setIsDisabled(false);
      handleClose();
      setIserror(false);
      setErrorMessage("");

    }).catch((error) =>{
      console.log(error)

    }) 
  }


  var content = <></>
  var title = ""
  if (props.formType === "film") {
    title = "Inserisci dettagli film";
    content= <DialogFilm />;
  } else if (props.formType === "spettacolo"){
    title = "Inserisci dettagli spettacolo";
    content= <DialogSpettacolo />;
  } else if (props.formType === "sala") {
    title = "Inserisci sala";
    content= <DialogSala/>;
  }

    return (
      <div>
        <Dialog
          open={props.openDialog}
          fullWidth
          maxWidth="sm"
          onClose={handleClose}
        >
          <DialogTitle align="center">{title}</DialogTitle>
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
           
                {content}

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