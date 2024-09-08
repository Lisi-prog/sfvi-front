import { Box, Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MenuInferior } from '../components/MenuInferior';

export const GeneralConfiguration = () => {

return (
	<Box>
		<Card>
			<CardContent>
				<Typography variant="h5" component="div">
				General Configuration
				</Typography>
			</CardContent>
		</Card>
	</Box>
);
};