import { Box, Button, Collapse, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, styled } from "@mui/material";
import React, { useRef } from "react";
import { AvTimer, MonitorHeart, PhotoCamera, RestartAlt, Settings, Tv } from "@mui/icons-material";
import logoUrl from '../assets/zero-logo.png'
import { start } from "repl";
import { GeneralConfiguration } from "../views/GeneralConfiguration";
import { CameraConfiguration } from "../views/CameraConfiguration";
import Test from "../components/Test";

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
  // console.log(document.getElementById("file-opener").files[0])
}


export default function MainDrawer() {
  const inputFile = useRef<HTMLInputElement | null>(null);
  const [openGeneralConfig, setOpenGeneralConfig] = React.useState(false);
  const handleOpenGeneralConfig = () => setOpenGeneralConfig(true);
  const handleCloseGeneralConfig = () => setOpenGeneralConfig(false);
  const [openCameraConfig, setOpenCameraConfig] = React.useState(false);
  const handleOpenCameraConfig = () => setOpenCameraConfig(true);
  const handleCloseCameraConfig = () => setOpenCameraConfig(false);
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
        <ListItemButton  onClick={handleOpenGeneralConfig}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="General Configuration" />
        </ListItemButton>
        <Dialog
          open={openGeneralConfig}
          onClose={handleCloseGeneralConfig}
          PaperProps={{
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const email = formJson.email;
              console.log(email);
              handleCloseGeneralConfig();
            },
          }}
        >
          {/* <DialogTitle>General Configuration</DialogTitle> */}
          <DialogContent>
            <GeneralConfiguration/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseGeneralConfig} variant="contained" color="error">Cancel</Button>
            <Button type="submit" variant="contained" >Accept</Button>
          </DialogActions>
        </Dialog>
        <Divider></Divider>
        <ListItemButton onClick={handleOpenCameraConfig}>
          <ListItemIcon>
            <PhotoCamera/>
          </ListItemIcon>
          <ListItemText primary="Camera Configuration"/>
        </ListItemButton>
        <Dialog
          open={openCameraConfig}
          onClose={handleCloseCameraConfig}
          PaperProps={{
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const email = formJson.email;
              console.log(email);
              handleCloseCameraConfig();
            },
          }}
        >
          {/* <DialogTitle>General Configuration</DialogTitle> */}
          <DialogContent>
            <CameraConfiguration/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseCameraConfig} variant="contained" color="error">Cancel</Button>
            <Button type="submit" variant="contained" >Accept</Button>
          </DialogActions>
        </Dialog>
        <Divider></Divider>
          
        <ListItemButton onClick={onOpenFileClick}>
          <input type='file' id='file-opener' ref={inputFile} style={{display: 'none'}} onChange={(event) => console.log('hola')}/>
          <ListItemIcon>
            <RestartAlt />
          </ListItemIcon>
          <ListItemText primary="Select Program" />
        </ListItemButton>
          <Test/>
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
