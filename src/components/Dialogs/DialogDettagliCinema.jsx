import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, List,  ListItem,  Divider,

    ListItemText,
   } from '@mui/material';



const TabUsageListItem = ({ label, children }) => (
    <ListItem alignItems='flex-start'>

        <Typography
          variant="overline"
          color="primary"
          style={{
            paddingRight: 4,
            minWidth: 150,
            textAlign: "fixed-start",
          }}
        >
          {label}
        </Typography>
   
      <ListItemText>
        
        <Typography variant="body2">{children}</Typography>
      </ListItemText>
    </ListItem>
)

  

export default function DialogDettagliCinema(props) {
   
  return ( 
      <Dialog
        open={props.openDialog}
        fullWidth
        maxWidth="sm"
        onClose={props.setCloseDialog}
      >
        
       <DialogTitle align='center' color='primary'>{props.info.nome}</DialogTitle>
        <Divider light/>
         <DialogContent>
        
        <List>
              <TabUsageListItem label="Nome">
               {props.info.nome}
              </TabUsageListItem>
              <TabUsageListItem label="Città">
               {props.info.citta} 
              </TabUsageListItem>
              <TabUsageListItem label="Recapito">
                {props.info.recapito}
              </TabUsageListItem>
              <TabUsageListItem label="Via">
                {props.info.via}
              </TabUsageListItem>
              <TabUsageListItem label="CAP">
                {props.info.cap}
              </TabUsageListItem>
              <TabUsageListItem label="Civico">
                {props.info.civico}
              </TabUsageListItem>
            </List>
         </DialogContent>
        
        <DialogActions>
          <Button variant='outlined' onClick={() => props.setCloseDialog()}>
            Ok
          </Button>
        </DialogActions>
   </Dialog>
  );
}
