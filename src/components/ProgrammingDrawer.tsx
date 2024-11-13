import { Box, Button, Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useEffect } from "react";
import { AvTimer, MonitorHeart, PhotoCamera, RestartAlt, Settings, Tv } from "@mui/icons-material";
import logoUrl from '../assets/zero-logo.png'
import { useLastMessageContext, useSendMessageContext } from "../providers/WebSocketProvider";

const subMenuStyle = {
  backgroundColor: "#22ABBD",
  marginLeft: 1,
  borderRadius: 1,
}
const subMenuTextoStyle = {
  fontSize: 13
}

const collapseStyle = {
  pt: 1,
  pr: 1
}

const ListItemButtonStyle = {
  pl: 2
}

export default function ProgrammingDrawer() {
  const lastMessage = useLastMessageContext()
  const sendMessage = useSendMessageContext()
  const [openArmado, setOpenArmado] = React.useState(false);
  const [openMecanica, setOpenMecanica] = React.useState(false);
  const [openInyeccion, setOpenInyeccion] = React.useState(false);

  useEffect(() => {
    sendMessage('Cargo el Programming Drawer')
  }, [])
  

  const DrawerList = (
    <Box sx={{width:'15vw'}} role="presentation">
      {/* <List sx={{pt:0}}>
        <ListItem sx={{p:0}}>
          <img src={logoUrl}/>  
        </ListItem>
      </List> */}
      <List sx={{height: '100vh'}}>
      <Divider></Divider>
        
        <Divider></Divider>
        <ListItemButton  href='/NewProgram'> {/* esto deberia abrir un modal para elejir programa clasico o DL*/}
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="New Program" />
        </ListItemButton>
        <Divider></Divider>
        <Box sx={{position: 'absolute',bottom: 35, width: '15vw'}}>
        <Divider></Divider>
          <ListItemButton  href='/'>
            <ListItemIcon>
              <MonitorHeart/>
            </ListItemIcon>
            <ListItemText primary="Monitor Interface" />
          </ListItemButton>
          <Divider></Divider>
        </Box>
      </List>
    </Box>
  );

  return (
    <Drawer variant="persistent" open={true}
      PaperProps={{
        sx: {
          backgroundColor: "#2C8C99",
          boxShadow: 15,
          marginTop: 3.5
        }
      }}
    >
      {DrawerList}
    </Drawer>
  );
}
