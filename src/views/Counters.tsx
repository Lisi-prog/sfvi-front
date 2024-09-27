import { Box, Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AuxiliarDrawer from '../components/AuxiliarDrawer';
import { MenuInferior } from '../components/MenuInferior';

export const Counters = () => {

return (
	<Box>
		<AuxiliarDrawer></AuxiliarDrawer>
		<Card>
			<CardContent>
				<Typography variant="h5" component="div">
				Counters
				</Typography>
			</CardContent>
		</Card>
	</Box>
);
};