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
export const GeneralConfiguration = () => {
const [age, setAge] = React.useState('');
const [triggerPin, setTriggerPin] = React.useState('');
const [onlinePin, setOnlinePin] = React.useState('');
const [bussyPin, setBussyPin] = React.useState('');
const [offlinePin, setOfflinePin] = React.useState('');
const [okPin, setOkPin] = React.useState('');
const [noOkPin, setNoOkPin] = React.useState('');

const handleChangeTriggerPin = (event: SelectChangeEvent) => {
	setTriggerPin(event.target.value as string);
};
const handleChangeOnlinePin = (event: SelectChangeEvent) => {
	setOnlinePin(event.target.value as string);
};
const handleChangeBussyPin = (event: SelectChangeEvent) => {
	setBussyPin(event.target.value as string);
};
const handleChangeOfflinePin = (event: SelectChangeEvent) => {
	setOkPin(event.target.value as string);
};
const handleChangeOkPin = (event: SelectChangeEvent) => {
	setOkPin(event.target.value as string);
};
const handleChangeNoOkPin = (event: SelectChangeEvent) => {
	setNoOkPin(event.target.value as string);
};
return (
	<Box >
		<AuxiliarDrawer></AuxiliarDrawer>
		<Card sx={{width:'25vw'}}>
			<CardContent sx={{justifyContent:'center', alignContent:'center'}}>
				<Typography variant="h5" component="div" mb={1}>
				General Configuration
				</Typography>
				<Button variant="contained" color='error' sx={buttonStyle}>Offline</Button>
				<Button variant="contained" color='primary' sx={buttonStyle}>Reset</Button>
				<FormControl sx={selectorStyle} size='small'>
					<InputLabel id="trigger-pin-select-label">Trigger Pin</InputLabel>
					<Select
						labelId="trigger-pin-select-label"
						id="trigger-pin-select"
						value={triggerPin}
						label="Trigger Pin"
						onChange={handleChangeTriggerPin}
						size='small'
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
      	</FormControl>
				<FormControl sx={selectorStyle} size='small'>
					<InputLabel id="online-pin-select-label">Online Pin</InputLabel>
					<Select
						labelId="online-pin-select-label"
						id="online-pin-select"
						value={onlinePin}
						label="Online Pin"
						onChange={handleChangeOnlinePin}
						size='small'
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
      	</FormControl>
				<FormControl sx={selectorStyle} size='small'>
					<InputLabel id="bussy-pin-select-label">Bussy Pin</InputLabel>
					<Select
						labelId="bussy-pin-select-label"
						id="bussy-pin-select"
						value={bussyPin}
						label="Bussy Pin"
						onChange={handleChangeBussyPin}
						size='small'
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
      	</FormControl>
				<FormControl sx={selectorStyle} size='small'>
					<InputLabel id="ok-pin-select-label">OK Pin</InputLabel>
					<Select
						labelId="ok-pin-select-label"
						id="ok-pin-select"
						value={okPin}
						label="Ok Pin"
						onChange={handleChangeOkPin}
						size='small'
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
      	</FormControl>
				<FormControl sx={selectorStyle} size='small'>
					<InputLabel id="no-ok-pin-select-label">NOK Pin</InputLabel>
					<Select
						labelId="no-ok-pin-select-label"
						id="no-ok-pin-select"
						value={noOkPin}
						label="NOK Pin"
						onChange={handleChangeNoOkPin}
						size='small'
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
      	</FormControl>
			</CardContent>
		</Card>
	</Box>
);
};