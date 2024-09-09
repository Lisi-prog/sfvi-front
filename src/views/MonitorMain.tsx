import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MenuInferior } from '../components/MenuInferior';
const textFieldStyle = {
	marginBottom: 1
}
export const MonitorMain = ({imgUrl=''}:{imgUrl: string}) => {

return (
	<Box>
		<Grid container spacing={1}>
			<Grid item>
				<Card>
					<CardContent>
						<Typography variant="h5" component="div" height={'5vh'}>
						Monitor Main
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{width: '60vw', height: '85vh'}}>
					<CardContent>
						<img src={imgUrl}/>
					</CardContent>
				</Card>
			</Grid>
			<Grid item>
				<Card sx={{width: '23vw', height:'94.5vh'}}>
					<CardContent sx={{alignContent:'space-evenly'}}>
							<TextField id="outlined-basic" label="Program Name" variant="outlined" fullWidth sx={textFieldStyle}/>
							<TextField id="outlined-basic" label="Status" variant="outlined" fullWidth sx={textFieldStyle}/>
							<TextField id="outlined-basic" label="Pictures Taken" variant="outlined" fullWidth sx={textFieldStyle}/>
							<TextField id="outlined-basic" label="NOK Pictures" variant="outlined" fullWidth sx={textFieldStyle}/>
							<Button variant='contained' fullWidth>
								Test Trigger
							</Button>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	</Box>
);
};