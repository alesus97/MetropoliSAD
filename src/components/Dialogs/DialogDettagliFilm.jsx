import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography, List,  ListItem, Card, CardContent, Grid,Tooltip, Divider,
    ListItemButton,
    ListItemText,
    ListItemIcon } from '@mui/material';
import Scrollbars from 'rc-scrollbars';


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
        
       <DialogTitle align='center' color='primary'>{props.info.titolo}</DialogTitle>
        <Divider light/>
         <DialogContent>


        <List>

              <TabUsageListItem label="Genere">
               {props.info.genere}
              </TabUsageListItem>
              <TabUsageListItem label="Durata">
               {props.info.durata}
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
          <Button variant='outlined' onClick={() => props.setCloseDialog()}>
            Ok
          </Button>
        </DialogActions>
   </Dialog>
  );
}
