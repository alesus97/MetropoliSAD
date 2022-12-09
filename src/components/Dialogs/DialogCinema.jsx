
import React from "react";
import { 
  Box, 
  Stack, 
  TextField 
} from "@mui/material";


export default function DialogCinema(){
    return(
      <Box>
        <TextField
     fullWidth
     label="Nome"
     required
     autoComplete="nome"
     name="nome"
     sx={{
       "& fieldset": {
         borderColor: "white",
       },
     }}
   />
     <Stack direction="row" spacing={2} sx={{mt:2}}>

   <TextField
     fullWidth
     label="Città"
     required
     autoComplete="citta"
     name="citta"
     sx={{
       "& fieldset": {
         borderColor: "white",
       },
     }}
   />

 <TextField
   fullWidth
   label="CAP"
   required
   type="number"
   autoComplete="CAP"
   name="CAP"
   sx={{
     "& fieldset": {
       borderColor: "white",
     },
   }}
 />
     </Stack>
       <Stack direction="row" spacing={2} sx={{mt:2}}>

       <TextField
            fullWidth
            label="Via"
            required
            autoComplete="via"
            name="via"
            sx={{
              "& fieldset": {
                borderColor: "white",
              },
            }}
          />

        <TextField
          fullWidth
          label="Civico"
          required
          type="number"
          autoComplete="civico"
          name="civico"
          sx={{
            "& fieldset": {
              borderColor: "white",
            },
          }}
        />
             
            </Stack>
            <Stack direction="row" spacing={2} sx={{mt:2}}>

            <TextField
              fullWidth
              label="Latitudine"
              required
              type="number"
              autoComplete="latitudine"
              name="latitudine"
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
            />
            <TextField
              fullWidth
              label="Longitudine"
              required
              type="number"
              autoComplete="longitudine"
              name="longitudine"
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
            />

            </Stack>

            <Stack direction="row" spacing={2} sx={{mt:2}}>

                
            <TextField
              fullWidth
              label="Recapito"
              required
              type="number"
              autoComplete="recapito"
              name="recapito"
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
            />
            <TextField
              fullWidth
              label="Facciata"
              autoComplete="image_url"
              name="image_url"
              type="url"
              required
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
            />
           
            </Stack>
            <p></p>
         
    </Box>
      
    );
}