import { ArrowDownward } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Divider, Grid, TextField, Typography } from '@mui/material';
import axios, {isCancel, AxiosError} from 'axios';
import React, { useEffect, useState } from 'react';
import MainDrawer from '../components/MainDrawer';
import { MenuInferior } from '../components/MenuInferior';
import { CameraConfiguration } from './CameraConfiguration';
import { GeneralConfiguration } from './GeneralConfiguration';
const textFieldStyle = {
	marginBottom: 1,
}	
const firstTextFieldStyle = {
	marginBottom: 1,
	marginTop: 1,
}
const dataExample = {
  title: 'Hello World',
  body: 'This is a test post.',
  userId: 1,
};
export const MonitorMain = () => {
const [acordionExpandido, setAcordionExpandido] = React.useState<string | false>('mainConfig');
const [imgUrl, setImgUrl] = React.useState<string>('');

const [urlSolicitada, setUrlSolicitada] = React.useState("");

function test() {
	const url = `${import.meta.env.HTTP_URL || 'http://127.0.0.1'}:${import.meta.env.HTTP_PORT || 5000}/test/${urlSolicitada}`;
	console.log(url); // Verifica la URL construida
	axios
		.post(`${import.meta.env.HTTP_URL || 'http://127.0.0.1'}:${import.meta.env.HTTP_PORT || 5000}/test`, dataExample, 
		{
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json;charset=UTF-8',
			}
		}
		)
		.then(response => {
			console.log(response.data)
			setImgUrl(response.data);
		})
		.catch(function(error) {
				console.log(`Error, ${error}`);
		});
	}

	async function test2(){
		const datos = [
			{
			  "userId": 1,
			  "id": 1,
			  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
			}
		]
		try {
		  const response = await fetch('http://127.0.0.1:5000/test', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(datos)
		  });
	
		  const result = await response.json();
		  setImgUrl(result);
		} catch (error) {
		  console.error('Error:', error);
		}
	}

return (
	<Box>
		<MainDrawer></MainDrawer>
		<Grid container spacing={1}>
			<Grid item>
				{/* <Card>
					<CardContent>
						<Typography variant="h5" component="div" height={'5vh'}>
						Monitor Main
						</Typography>
					</CardContent>
				</Card> */}
				<Card sx={{width: '60vw', height: '96vh'}}>
					<CardContent>
						<img src={imgUrl}/>
					</CardContent>
				</Card>
			</Grid>
			<Grid item>
				<Card sx={{width: '23.4vw', height:'96vh', msOverflowStyle:'none', scrollbarWidth:'none', overflowY:'scroll'}}>
					<CardContent sx={{padding: 0}}>
							{/* <Accordion disableGutters expanded={acordionExpandido === 'mainConfig'} onChange={handleChangeAccordion('mainConfig')}>
								<AccordionSummary
									expandIcon={<ArrowDownward/>}
									aria-controls="main-config-panel"
									id="main-config"
								> */}
									{/* <Typography>Main Configuration</Typography> */}
								{/* </AccordionSummary> */}
								<Divider></Divider>
								{/* <AccordionDetails> */}
									<TextField value={""} id="outlined-basic" label="Program Name" variant="outlined" fullWidth size='small' disabled sx={firstTextFieldStyle}/>
									<TextField value={""} id="outlined-basic" label="Status" variant="outlined" fullWidth size='small' disabled sx={textFieldStyle}/>
									<TextField value={""} id="outlined-basic" label="Pictures Taken" variant="outlined" fullWidth size='small' disabled sx={textFieldStyle}/>
									<TextField value={""} id="outlined-basic" label="NOK Pictures" variant="outlined" fullWidth size='small' disabled sx={textFieldStyle}/>
									<Button variant='contained' fullWidth>
										Test Trigger
									</Button>

									<TextField value={""} id="outlined-basic" label="URL" variant="outlined" fullWidth size='small' sx={textFieldStyle} onChange={(event) => setUrlSolicitada(event.target.value)}/>
									<Button variant='contained' fullWidth onClick={test}>TEST IMAGE</Button>
								{/* </AccordionDetails>
							</Accordion> */}
							{/* <Accordion disableGutters expanded={acordionExpandido === 'generalConfig'} onChange={handleChangeAccordion('generalConfig')} >
								<AccordionSummary
									expandIcon={<ArrowDownward/>}
									aria-controls="general-config-panel"
									id="general-config"
								>
									<Typography>General Configuration</Typography>
								</AccordionSummary>
								<Divider></Divider>
								<AccordionDetails>
									
									<GeneralConfiguration/>
								</AccordionDetails>
							</Accordion>
							<Accordion disableGutters expanded={acordionExpandido === 'cameraConfig'} onChange={handleChangeAccordion('cameraConfig')}>
								<AccordionSummary
									expandIcon={<ArrowDownward/>}
									aria-controls="camera-config-panel"
									id="camera-config"
								>
									<Typography>Camera Configuration</Typography>
								</AccordionSummary>
								<Divider></Divider>
								<AccordionDetails>
									<CameraConfiguration/>
								</AccordionDetails>
							</Accordion> */}
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	</Box>
);
};
