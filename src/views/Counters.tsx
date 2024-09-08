import { Box, Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MenuInferior } from '../components/MenuInferior';

export const Counters = () => {

return (
	<Box>
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