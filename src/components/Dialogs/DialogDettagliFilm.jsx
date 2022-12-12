import * as React from 'react';
import { 
  Typography, 
  List,  
  ListItem,  
  Divider,
  Button,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
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

  

export default function DialogDettagliFilm(props) {
   
  return ( 
      <Dialog
        open={props.openDialog}
        fullWidth
        maxWidth="sm"
        onClose={props.setCloseDialog}
      >
        
       <DialogTitle align='center' >{props.info.titolo}</DialogTitle>
        <Divider />
         <DialogContent>
        
        <List>
              <TabUsageListItem label="Genere">
               {props.info.genere}
              </TabUsageListItem>
              <TabUsageListItem label="Durata">
               {props.info.durata} minuti
              </TabUsageListItem>
              <TabUsageListItem label="Regia">
                {props.info.regia}
              </TabUsageListItem>
              <TabUsageListItem label="Produttore">
                {props.info.produttore}
              </TabUsageListItem>
              <TabUsageListItem label="Data di Uscita">
                {props.info.data_uscita}
              </TabUsageListItem>
              <TabUsageListItem label="Trama">
                {props.info.trama}
              </TabUsageListItem>
            </List>
         </DialogContent>
        
        <DialogActions>
          <Button  variant="contained"   onClick={() => props.setCloseDialog()}>
            Ok
          </Button>
        </DialogActions>
   </Dialog>
  );
}
