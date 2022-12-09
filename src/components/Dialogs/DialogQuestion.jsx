
import React from "react";

import {
  Stack, 
  Box,
  TextField
} from "@mui/material";


export default function DialogQuestion() {
  return (
    <Box>
      
        <TextField
          fullWidth
          margin="normal"
          label="Question"
          autoComplete="question"
          required
          name="question"
          sx={{
            "& fieldset": {
              borderColor: "white",
            },
          }}
        />
     
     <Stack direction="row" spacing={2} sx={{mt:2}}>
          <TextField
            fullWidth
            label="Answer 1"
            autoComplete="answer1"
            name="answer1"
            required
            sx={{
              "& fieldset": {
                borderColor: "white",
              },
            }}
          />

        <TextField
          fullWidth
          label="Answer 2"
          autoComplete="answer2"
          name="answer2"
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
              label="Answer 3"
              autoComplete="answer3"
              name="answer3"
              required
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
            />
          
            <TextField
              fullWidth
              label="Correct answer"
              autoComplete="correctAnswer"
              name="correctAnswer"
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