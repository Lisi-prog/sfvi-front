import { Box } from "@mui/material";
import React from "react";
import AppBar from "../AppBar";
import { useViewport } from "../helper/useViewport";
import TemporalDrawer from './TemporalDrawer';

export default function Layout() { 
  const {width} = useViewport();
  const breakpoint = 620;
  
  return(
    <Box>
      <AppBar/>
      <TemporalDrawer></TemporalDrawer>
    </Box>
  );
};