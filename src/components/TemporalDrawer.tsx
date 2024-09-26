import { Box, Button, Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { AvTimer, MonitorHeart, PhotoCamera, RestartAlt, Settings, Tv } from "@mui/icons-material";
import logoUrl from '../assets/zero-logo.png'

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

export default function TemporalDrawer() {
  const [openArmado, setOpenArmado] = React.useState(false);
  const [openMecanica, setOpenMecanica] = React.useState(false);
  const [openInyeccion, setOpenInyeccion] = React.useState(false);

  const DrawerList = (
    <Box sx={{ width: '15vw' }} role="presentation">
      <List sx={{pt:0}}>
        <ListItem sx={{p:0}}>
          <img src={logoUrl}/>
        </ListItem>
      </List>
      <List>
      <Divider></Divider>
        <ListItemButton  href='/'>
          <ListItemIcon>
            <MonitorHeart/>
          </ListItemIcon>
          <ListItemText primary="Main" />
        </ListItemButton>
        <Divider></Divider>
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
        <ListItemButton  href='/SelectProgram'>
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
        <ListItemButton  href='/ProgrammingInterface'>
          <ListItemIcon>
            <Tv/>
          </ListItemIcon>
          <ListItemText primary="Programming Interface" />
        </ListItemButton>
        <Divider></Divider>
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
