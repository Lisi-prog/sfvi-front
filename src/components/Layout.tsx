import { Box } from "@mui/material";
import React from "react";
import AppBar from "../AppBar";
import TemporalDrawer from './TemporalDrawer';

export default function Layout() { 
  return(
    <Box>
      <AppBar/>
      <TemporalDrawer></TemporalDrawer>
    </Box>
  );
};