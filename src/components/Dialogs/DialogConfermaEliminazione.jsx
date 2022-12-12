import * as React from "react";

import {
  DialogContent, 
  DialogContentText,
  Stack,
  Typography,
} from "@mui/material";
import { theme } from "../../constants/theme";

import { WarningAmber } from "@mui/icons-material";


export default function DialogConfermaEliminazione(props) {


  return (

        <DialogContent>
           <DialogContentText component="div" id="alert-dialog-description" > 


          <Stack  justifyContent="space-between" direction={{ xs: "column", sm: "row" }} spacing={2}>
            <WarningAmber color="error" />
            <Typography textAlign="center"  > {props.onDeleteMessage} 
            </Typography>
         <WarningAmber color="error" />
          </Stack>
      





        </DialogContentText> 
        </DialogContent>
        

  );
}
