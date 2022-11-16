import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import { useParams } from "react-router-dom";

export default function Questions () {
    const {filmId} = useParams()
    
    return(
        <p>{filmId}</p>
       


    );

}