import { Box, Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AuxiliarDrawer from '../components/AuxiliarDrawer';
import { MenuInferior } from '../components/MenuInferior';
const buttonStyle = {
	width: '20vw', 
	height: '4vh', 
	mb: 1,	
	ml:2.5
}
const selectorStyle = {
	minWidth: '20vw', 
	mb: 1,
	ml:2.5
}

const ModalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  //width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ImageRouteSelector = () => {


return (
	<Box>
		{/* <AuxiliarDrawer></AuxiliarDrawer> */}
		<Card sx={{width:'25vw'}}>
			<CardContent sx={{justifyContent:'center', alignContent:'center'}}>
				<Typography variant="h5" component="div" mb={1}>
				Image Route Selector
				</Typography>
			</CardContent>
		</Card>
	</Box>
);
};