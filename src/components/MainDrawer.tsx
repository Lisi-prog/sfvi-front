import { Box, Button, Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from "@mui/material";
import React, { useRef } from "react";
import { AvTimer, MonitorHeart, PhotoCamera, RestartAlt, Settings, Tv } from "@mui/icons-material";
import logoUrl from '../assets/zero-logo.png'
import { start } from "repl";

declare global {
  interface Window {
    showOpenFilePicker: any;
  }
}

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

async function abrirSelectorDeArchivos() {
  const [fileHandle] = await window.showOpenFilePicker({startIn:'documents'});
  const file = await fileHandle.getFile();
  const contents = await file.text();
}


export default function MainDrawer() {
  const [openArmado, setOpenArmado] = React.useState(false);
  const [openMecanica, setOpenMecanica] = React.useState(false);
  const [openInyeccion, setOpenInyeccion] = React.useState(false);
  const inputFile = useRef<HTMLInputElement | null>(null);
  
  const onOpenFileClick = () => {
    // if (inputFile.current){
    //   inputFile.current.click();
    // }
    abrirSelectorDeArchivos()
  };

  const DrawerList = (
    <Box sx={{ width: '15vw' }} role="presentation">
      {/* <List sx={{pt:0}}>
        <ListItem sx={{p:0}}>
          <img src={logoUrl}/>
        </ListItem>
      </List> */}
      <List sx={{height: '100vh'}}>
        <ListItemButton  href='/GeneralConfiguration'>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="General Configuration" />
        </ListItemButton>
        <Divider></Divider>
        <ListItemButton  href='/CameraConfiguration'>
          <ListItemIcon>
            <PhotoCamera/>
          </ListItemIcon>
          <ListItemText primary="Camera Configuration"/>
        </ListItemButton>
        <Divider></Divider>
          
        <ListItemButton onClick={onOpenFileClick}>
          <input type='file' id='file-opener' ref={inputFile} style={{display: 'none'}}/>
          <ListItemIcon>
            <RestartAlt />
          </ListItemIcon>
          <ListItemText primary="Select Program" />
        </ListItemButton>
        <Divider></Divider>
        <ListItemButton  href='/Counters'>
          <ListItemIcon>
            <AvTimer />
          </ListItemIcon>
          <ListItemText primary="Counters" />
        </ListItemButton>
        <Divider></Divider>
        <Box sx={{position: 'absolute',bottom: 35}}>
          <Divider></Divider>
          <ListItemButton  href='/ProgrammingInterface' >
            <ListItemIcon>
              <Tv/>
            </ListItemIcon>
            <ListItemText primary="Programming Interface" />
            
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
