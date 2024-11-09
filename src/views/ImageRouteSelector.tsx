import { Box, Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AuxiliarDrawer from '../components/AuxiliarDrawer';
import InputSelectProgram from '../components/InputSelectProgram';
import { MenuInferior } from '../components/MenuInferior';
const buttonStyle = {
	width: '100%', 
	height: '4vh', 
	mb: 1,	
}
const selectorStyle = {
	width: '100%', 
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
const inputImageRoute = 'image-opener'

export interface ImageRouteSelector {
  getFilePath: (filePath: string) => void;
}
export const ImageRouteSelector: React.FC<ImageRouteSelector> = (props) => {
	const [pathSeleccionado, setPathSeleccionado] = useState('');

	const onOpenFileClick = () => {
		var x = document.getElementById(inputImageRoute);
    x?.click()
  };
	const dameImagePath = (filePath: string) => {
    console.log(`Ruta desde el padre: ${filePath}`)
		setPathSeleccionado(filePath)
		props.getFilePath(filePath)
  }

return (
	<Box>
		{/* <AuxiliarDrawer></AuxiliarDrawer> */}
		<Card sx={{width:'35vw'}}>
			<CardContent>
				<Button variant="contained" onClick={onOpenFileClick} style={buttonStyle}>Select image</Button>
				<InputSelectProgram id={inputImageRoute} getFilePath={dameImagePath}/>
				<TextField value={pathSeleccionado} disabled style={selectorStyle}></TextField>
			</CardContent>
		</Card>
	</Box>
);
};