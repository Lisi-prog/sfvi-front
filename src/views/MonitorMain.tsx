import { ArrowDownward } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MenuInferior } from '../components/MenuInferior';
import { CameraConfiguration } from './CameraConfiguration';
import { GeneralConfiguration } from './GeneralConfiguration';
const textFieldStyle = {
	marginBottom: 1,
}
export const MonitorMain = ({imgUrl=''}:{imgUrl: string}) => {
const [acordionExpandido, setAcordionExpandido] = React.useState<string | false>('mainConfig');
const handleChangeAccordion = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
												setAcordionExpandido(newExpanded ? panel : false);
											};
return (
	<Box>
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
									<TextField id="outlined-basic" label="Program Name" variant="outlined" fullWidth size='small' sx={textFieldStyle}/>
									<TextField id="outlined-basic" label="Status" variant="outlined" fullWidth size='small' sx={textFieldStyle}/>
									<TextField id="outlined-basic" label="Pictures Taken" variant="outlined" fullWidth size='small' sx={textFieldStyle}/>
									<TextField id="outlined-basic" label="NOK Pictures" variant="outlined" fullWidth size='small' sx={textFieldStyle}/>
									<Button variant='contained' fullWidth>
										Test Trigger
									</Button>
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
