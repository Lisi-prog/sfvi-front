import { ArrowDownward } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Divider, Grid, TextField, Typography } from '@mui/material';
//import axios, {isCancel, AxiosError, AxiosResponse} from 'axios';
import React, { useEffect, useState } from 'react';
import MainDrawer from '../components/MainDrawer';
import { MenuInferior } from '../components/MenuInferior';
import { CameraConfiguration } from './CameraConfiguration';
import { GeneralConfiguration } from './GeneralConfiguration';
import EventStream from '../components/Test';
import useWebSocket from 'react-use-websocket';
import { parsearJson } from '../utils/common-util/general-functions';
import ImageViewer from '../components/ImageViewer';
import { useLastMessageContext, useSendMessageContext } from '../providers/WebSocketProvider';

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

// const [socketUrl, setSocketUrl] = useState(`${import.meta.env.VITE_URL_WEBSOCKET}:${import.meta.env.VITE_PUERTO_WEBSOCKET}`);
// const { sendMessage, lastMessage, readyState, getWebSocket} = useWebSocket(socketUrl);
const lastMessage = useLastMessageContext()
const sendMessage = useSendMessageContext()

const [filename, setFilename] = React.useState<string>('');
const [cont, setCont] = React.useState<number[]>([]);
	useEffect(() => {
		sendMessage('ping')
	}, [])

	useEffect(() => {
		var jsonAux = parsearJson(lastMessage?.data.toString())
    console.log(jsonAux)
    setFilename(jsonAux.filename)
    setCont(jsonAux.content)

		
	}, [lastMessage])
	

	// function test(){
	// 	axios.post<Blob>(`${import.meta.env.VITE_HTTP_URL}:${import.meta.env.VITE_HTTP_PORT}/test`, dataExample, { responseType: 'blob' })
	// 		.then((response: AxiosResponse<Blob>) => {
	// 			const url = URL.createObjectURL(response.data);
	// 			console.log(response)
	// 			setImgUrl(url);
	// 		})
	// 		.catch(error => {
	// 			console.error('Error al cargar la imagen:', error);
	// 		});
	// }

return (
	<Box>
		<MainDrawer></MainDrawer>
		<Grid container spacing={1}>
			<Grid item>
				<Card sx={{width: '60vw', height: '96vh'}}>
					<CardContent>
						<ImageViewer filename={filename} content={cont} /> 
					</CardContent>
					<EventStream/>
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

									<TextField value={urlSolicitada} id="outlined-basic" label="URL" variant="outlined" fullWidth size='small' sx={textFieldStyle} onChange={(event) => setUrlSolicitada(event.target.value)}/>
									{/* <Button variant='contained' fullWidth onClick={test}>TEST IMAGE</Button> */}
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	</Box>
);
};
