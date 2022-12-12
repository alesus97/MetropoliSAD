
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