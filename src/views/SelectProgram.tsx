import { Box, Button, Card, CardContent, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AuxiliarDrawer from '../components/AuxiliarDrawer';
import { MenuInferior } from '../components/MenuInferior';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
export const SelectProgram = () => {

return (
	<Box>
		<AuxiliarDrawer></AuxiliarDrawer>
		<Card>
			<CardContent>
				<Typography variant="h5" component="div">
				Select Program
				</Typography>
				<Button
					component="label"
					role={undefined}
					variant="contained"
					tabIndex={-1}
				>
					Select Program
					<VisuallyHiddenInput
						type="file"
						onChange={(event) => console.log(event.target.files)}
						multiple
					/>
				</Button>
			</CardContent>
		</Card>
	</Box>
);
};