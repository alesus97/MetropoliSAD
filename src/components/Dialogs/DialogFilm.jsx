
import React from "react";
import { 
  Box, 
  Stack, 
  TextField 
} from "@mui/material";


export default function DialogFilm(){
    return(
      <Box>
      
        <TextField
          data-cy="titolo"
          fullWidth
          margin="normal"
          label="Titolo"
          required
          autoComplete="titolo"
          name="titolo"
          sx={{
            "& fieldset": {
              borderColor: "white",
            },
          }}
        />
     
      <Stack direction="row" spacing={2} sx={{mt:2}}>
          <TextField
            fullWidth
            data-cy="genere"
            label="Genere"
            required
            autoComplete="genere"
            name="genere"
            sx={{
              "& fieldset": {
                borderColor: "white",
              },
            }}
          />

        {/* <TextField
          fullWidth
          label="Cast"
          required
          autoComplete="cast"
          name="cast"
          sx={{
            "& fieldset": {
              borderColor: "white",
            },
          }}
        /> */}
       </Stack>
       <Stack direction="row" spacing={2} sx={{mt:2}}>
            <TextField
              data-cy="regia"
              fullWidth
              label="Regia"
              required
              autoComplete="regia"
              name="regia"
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
            />
          
            <TextField
              fullWidth
              data-cy="produttore"
              label="Produttore"
              required
              autoComplete="produttore"
              name="produttore"
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
            data-cy="data_di_uscita"
            required
            type="date"
            autoComplete="data"
            name="data"
            sx={{
              "& fieldset": {
                borderColor: "white",
              },
            }}
              
            />
          
            <TextField
              fullWidth
              data-cy="durata"
              label="Durata"
              autoComplete="durata"
              name="durata"
              required
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
              data-cy="trama"
              label="Trama"
              autoComplete="trama"
              name="trama"
              multiline
              required
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
            />
          
            <TextField
              fullWidth
              data-cy="locandina"
              label="Locandina"
              autoComplete="locandina"
              name="locandina"
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