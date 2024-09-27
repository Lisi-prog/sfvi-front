import { Box, Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import AuxiliarDrawer from "../components/AuxiliarDrawer";

export const ClasicProgram = () => {

  return (
    <Box>
      <AuxiliarDrawer></AuxiliarDrawer>
      <Grid container>
        <Grid item>
          <Typography> Clasic Program </Typography>
        </Grid>
      </Grid>
    </Box>
  );
  };