import { Box, Button, Collapse, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, styled, Card, CardContent, } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { AvTimer, MonitorHeart, PhotoCamera, RestartAlt, Settings, Tv } from "@mui/icons-material";
import logoUrl from '../assets/zero-logo.png'
import { start } from "repl";
import { GeneralConfiguration } from "../views/GeneralConfiguration";
import { CameraConfiguration } from "../views/CameraConfiguration";
import InputSelectProgram, { FilePath } from "./InputSelectProgram";
import useWebSocket, { ReadyState } from 'react-use-websocket';
import ImageViewer from './ImageViewer';
import { parsearJson } from '../utils/common-util/general-functions';
import { ImageRouteSelector } from "../views/ImageRouteSelector";
import { useLastMessageContext, useSendMessageContext } from "../providers/WebSocketProvider";
const mensaje = {
  codigo: 'dameimagen'
}
const inputFileRoute = 'file-opener'
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

const programExtensions = "json"
async function abrirSelectorDeArchivos() {
  // const [fileHandle] = await window.showOpenFilePicker({startIn:'documents'});
  // const file = await fileHandle.getFile();
  // const contents = await file.text();
  // console.log(document.getElementById("file-opener").files[0])
}


export default function MainDrawer() {
  // const [socketUrl, setSocketUrl] = useState(`${import.meta.env.VITE_URL_WEBSOCKET}:${import.meta.env.VITE_PUERTO_WEBSOCKET}`);
  // const { sendMessage, lastMessage, readyState, getWebSocket} = useWebSocket(socketUrl);
  const lastMessage = useLastMessageContext()
  const sendMessage = useSendMessageContext()
  const [openGeneralConfig, setOpenGeneralConfig] = React.useState(false);

  const handleOpenGeneralConfig = () => {
    setOpenGeneralConfig(true);
    sendMessage('Toco el boton General Configuration')
  }

  const handleCloseGeneralConfig = () => {
    setOpenGeneralConfig(false);
  }
  
  const [openCameraConfig, setOpenCameraConfig] = React.useState(false);
  const handleOpenCameraConfig = () => {
    setOpenCameraConfig(true);
    sendMessage('Toco el boton Camera Configuration')
  }
  const handleCloseCameraConfig = () => setOpenCameraConfig(false);
  
  const [openImageRouteSelector, setOpenImageRouteSelector] = React.useState(false)
  const handleOpenImageRouteSelector = () => setOpenImageRouteSelector(true);
  const handleCloseImageRouteSelector = () => setOpenImageRouteSelector(false);
  
  useEffect(() => {
    sendMessage('Cargo el main Drawer')
  }, [])

  useEffect(() => {
    // console.log(lastMessage?.data)
    console.log(lastMessage?.data)
    var jsonAux = parsearJson(lastMessage?.data.toString())
    console.log(jsonAux.filename)
    setFilename(jsonAux.filename)
    setCont(jsonAux.content)

    if(jsonAux.codigo === 'dame_ruta_imagen'){
      //Solicita que le indiquemos la ruta
      //Se debe abrir el selector de archivos, y detener todo hasta que se resuelva
      handleOpenImageRouteSelector()
		}

  }, [lastMessage])
  
  const [imgUrl, setImgUrl] = React.useState<string>('');
  const [filename, setFilename] = React.useState<string>('');
  const [cont, setCont] = React.useState<number[]>([]);
  
  const onOpenFileClick = () => {
    var x = document.getElementById(inputFileRoute)
    x?.click()
    sendMessage('Tocamos el boton Select Program')
  };
  const dameFilePath = (filePath: string) => {
    console.log(`Ruta desde el padre: ${filePath}`)
    sendMessage(JSON.stringify({codigo: 'toma_ruta_programa', ruta: filePath}))
  }

  const dameImagePath = (filePath: string) => {
    console.log(`Ruta desde el padre: ${filePath}`)
    
    setImgUrl(filePath)
    //sendMessage(JSON.stringify(mensajeJson))
  }

  const enviarImagePath = (imgUrl: string) => {
    var mensajeJson = {
      "codigo": "toma_ruta_imagen",
      "ruta": imgUrl
    }
    sendMessage(JSON.stringify(mensajeJson))
  }

  const DrawerList = (
    <Box sx={{ width: '15vw' }} role="presentation">
      {/* <List sx={{pt:0}}>
        <ListItem sx={{p:0}}>
          <img src={logoUrl}/>
        </ListItem>
      </List> */}
      {/* <Card sx={{width: '60vw', height: '96vh'}}>
					<CardContent>
						<img src={imgUrl}/>
					</CardContent>
			</Card> */}
      {/* <ImageViewer filename={filename} content={cont} />  */}
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
            <Button type="submit" variant="contained">Accept</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openImageRouteSelector}
          onClose={handleCloseImageRouteSelector}
          PaperProps={{
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const email = formJson.email;
              console.log(email);
              handleCloseImageRouteSelector();
            },
          }}
        >
          {/* <DialogTitle>General Configuration</DialogTitle> */}
          <DialogContent>
            <ImageRouteSelector getFilePath={dameImagePath}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseImageRouteSelector} variant="contained" color="error">Cancel</Button>
            <Button type="submit" variant="contained" onClick={() => enviarImagePath(imgUrl)}>Accept</Button> {/* Aqui se debe enviar la ruta de la imagen */}
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
          <ListItemIcon>
            <RestartAlt />
          </ListItemIcon>
          <ListItemText primary="Select Program" />
        </ListItemButton>
          <InputSelectProgram id={inputFileRoute} getFilePath={dameFilePath} extensions={programExtensions}/>
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
