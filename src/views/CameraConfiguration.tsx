import { Box, Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AuxiliarDrawer from '../components/AuxiliarDrawer';
import { MenuInferior } from '../components/MenuInferior';
const buttonStyle = {
	width: '20vw', 
	height: '4vh', 
	ml:2.5,
	mt:1
}
const smallButtonStyle = {
	width: '9vw', 
	height: '4vh', 
	mb: 1,	
	ml:1,
	mt:1
}
const numberInputStyle = {
	width: '20vw', 
	height: '5vh', 
	mt:1,
	mb: 0,	
	ml:2.5
}
const selectorStyle = {
	width: '20vw', 
	height: '5vh', 
	mt: 1,
	mb: 2,
	ml:2.5
}
export const CameraConfiguration = () => {

return (
	<Box>
		<AuxiliarDrawer></AuxiliarDrawer>
		<Card sx={{width:'25vw'}}>
			<CardContent>
				<Typography variant="h5" component="div" mb={1}>
				Camera Configuration
				</Typography>
				<TextField type={'number'} variant='outlined' label='Output Height' size='small' sx={numberInputStyle}></TextField>
				<TextField type={'number'} variant='outlined' label='Output Width' size='small' sx={numberInputStyle}></TextField>
				<TextField type={'number'} variant='outlined' label='Exposure Time' size='small' sx={numberInputStyle}></TextField>
				<TextField type={'number'} variant='outlined' label='Analog Gain' size='small' sx={numberInputStyle}></TextField>
				<FormControl component="fieldset" sx={{ mt: 1, ml:2.5, width: '20vw'}} >
      		<FormLabel component="legend">Auto White Balance</FormLabel>
					<FormGroup aria-label="position" row>
							<FormControlLabel
								value="Enable"
								control={<Checkbox />}
								label="Enable"
								labelPlacement="end"
							/>
							<TextField type={'number'} variant='outlined' label='Mode' size='small' sx={{mt:1, width: '10vw'}}></TextField>
					</FormGroup>
				</FormControl>
				<TextField type={'number'} variant='outlined' label='Sharpness' size='small' sx={numberInputStyle}></TextField>
				<TextField type={'number'} variant='outlined' label='Contrast' size='small' sx={numberInputStyle}></TextField>
				<TextField type={'number'} variant='outlined' label='Saturation' size='small' sx={numberInputStyle}></TextField>
				<TextField type={'number'} variant='outlined' label='Brightness' size='small' sx={numberInputStyle}></TextField>
				<TextField type={'number'} variant='outlined' label='Color Gains' size='small' sx={numberInputStyle}></TextField>
				<FormControl sx={{ mt: 1, ml:2.5, width: '20vw'}}>
					<FormLabel component="legend">File</FormLabel>
					<FormGroup aria-label="position" row>
						<Button variant="contained" color='primary' sx={smallButtonStyle}>Save</Button>
						<Button variant="contained" color='primary' sx={smallButtonStyle}>Load</Button>
					</FormGroup>
				</FormControl>
				<FormControl sx={{ mt: 2 }}>
					<FormLabel component="legend">Capture Image</FormLabel>
					<FormGroup aria-label="position" >
						<Button variant="contained" color='primary' sx={buttonStyle}>Capture</Button>
						<Button variant="contained" color='primary' sx={buttonStyle}>Select Folder</Button>
					</FormGroup>
				</FormControl>
			</CardContent>
		 </Card>
	</Box>
);
};