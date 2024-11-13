import { Box, Card, CardContent, Divider, Grid, IconButton, List, ListItem, ListItemText, ListSubheader, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MenuInferior } from '../components/MenuInferior';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Editor from "@monaco-editor/react";
import ProgrammingDrawer from '../components/ProgrammingDrawer';
import { useLastMessageContext, useSendMessageContext } from '../providers/WebSocketProvider';

function generate(element: React.ReactElement<any>) {

	return [0, 1, 2].map((value) =>
		React.cloneElement(element, {
			key: value,
		}),
	);
}

export const ProgrammingInterface = () => {
	const lastMessage = useLastMessageContext()
	const sendMessage = useSendMessageContext()
	const [dense, setDense] = React.useState(false);
	const [secondary, setSecondary] = React.useState(false);
	const [editAction, setEditAction] = React.useState(false);
	const [codeValue, setCodeValue] = React.useState("{\n\n}");

const onCodeChange = React.useCallback((val, viewUpdate) => {
	console.log('val:', val);
	setCodeValue(val);
}, []);

useEffect(() => {
	sendMessage('Estoy en Programming Interface')
}, [])

return (
	<Box>
		<ProgrammingDrawer></ProgrammingDrawer>
		<Grid container spacing={1}>
			<Grid item>
				<Card sx={{width: '35vw', height: '96vh'}}>
					<CardContent>
						<List 
							dense={dense}
							subheader={
								<ListSubheader component="div" id="lista-programas-subheader">
									Programs
								</ListSubheader>
							}
						>
								{generate(
									<Box>
										<ListItem
											secondaryAction={
												<Box>
													<IconButton edge="end" aria-label="copy" size='small' sx={{mr:0.5, ml:0.5}}>
														<ContentCopyIcon/>
													</IconButton>
													<IconButton edge="end" aria-label="edit" size='small' sx={{mr:0.5, ml:0.5}}>
														<EditIcon/>
													</IconButton>
													<IconButton edge="end" aria-label="delete" size='small' sx={{mr:0.5, ml:0.5}}>
														<DeleteIcon />
													</IconButton>
												</Box>
											}
										>
											<ListItemText
												primary="Single-line item"
												secondary={secondary ? 'Secondary text' : null}
											/>
										</ListItem>
										<Divider/>
									</Box>
									
								)}
							</List>
					</CardContent>
				</Card>
				
			</Grid>
			<Grid item>
				<Card sx={{width: '48.4vw', height: '96vh'}}>
					<CardContent>
					{/* <TextField
						id="outlined-multiline-flexible"
						label="Program Code"
						multiline
						fullWidth
						rows={29.5}
						
					/> */}
					<Editor
						height="93.4vh"
						language="json"
						theme="vs-dark"
						value={codeValue}
					/>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	</Box>
);
};