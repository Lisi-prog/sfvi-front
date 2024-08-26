import { Box, Grid, Button } from "@mui/material";
import React from "react";
const sombra = 10
const tamañoBoton = {
	height: '6vh',
	width: '18vw'
}
export const MenuInferior = () => {
    
	return (
		<Box>
			<Grid container direction={'row'} columnGap={2} >
				<Grid item boxShadow={sombra} borderRadius={1}>
						<Button variant="contained" style={tamañoBoton}>
							General Configuration
						</Button>
				</Grid>
				<Grid item boxShadow={sombra} borderRadius={1}>
						<Button variant="contained" style={tamañoBoton}>
							Camera Configuration
						</Button>
				</Grid>
				<Grid item boxShadow={sombra} borderRadius={1}>
						<Button variant="contained" style={tamañoBoton}>
							Select Program
						</Button>
				</Grid>
				<Grid item boxShadow={sombra} borderRadius={1}>
						<Button variant="contained" style={tamañoBoton}>
							Counters
						</Button>
				</Grid>
				<Grid item boxShadow={sombra} borderRadius={1}>
						<Button variant="contained" style={tamañoBoton}>
							Performing Interface
						</Button>
				</Grid>
			</Grid>
		</Box>
	);
};