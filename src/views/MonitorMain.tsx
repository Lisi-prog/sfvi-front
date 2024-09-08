import { Box, Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MenuInferior } from '../components/MenuInferior';

export const MonitorMain = ({imgUrl=''}:{imgUrl: string}) => {

return (
	<Box>
		<Card>
			<CardContent>
				<Typography variant="h5" component="div">
				Monitor Main
				</Typography>
				<img src={imgUrl} width='400' height='400'/> 
			</CardContent>
		</Card>
	</Box>
);
};