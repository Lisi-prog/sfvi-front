import { Box, Button, Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AvTimer, CameraswitchOutlined, ExpandLess, ExpandMore, PhotoCamera, RestartAlt, Settings, Tv } from "@mui/icons-material";
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
  const handleClickArmado = () => {
    setOpenArmado(!openArmado);
  };
  const handleClickMecanica = () => {
    setOpenMecanica(!openMecanica);
  };
  const handleClickInyeccion = () => {
    setOpenInyeccion(!openInyeccion);
  };

  const DrawerList = (
    <Box sx={{ width: '15vw' }} role="presentation">
      <List sx={{pt:0}}>
        <ListItem sx={{p:0}}>
          <img src={logoUrl}/>
        </ListItem>
      </List>
      <List>
      <Divider></Divider>
        <ListItemButton onClick={handleClickArmado}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="General Configuration" />
        </ListItemButton>
        <Divider></Divider>
        <ListItemButton onClick={handleClickArmado}>
          <ListItemIcon>
            <PhotoCamera/>
          </ListItemIcon>
          <ListItemText primary="Camera Configuration" />
        </ListItemButton>
        <Divider></Divider>
        <ListItemButton onClick={handleClickArmado}>
          <ListItemIcon>
            <RestartAlt />
          </ListItemIcon>
          <ListItemText primary="Select Program" />
        </ListItemButton>
        <Divider></Divider>
        <ListItemButton onClick={handleClickArmado}>
          <ListItemIcon>
            <AvTimer />
          </ListItemIcon>
          <ListItemText primary="Counters" />
        </ListItemButton>
        <Divider></Divider>
        <ListItemButton onClick={handleClickArmado}>
          <ListItemIcon>
            <Tv/>
          </ListItemIcon>
          <ListItemText primary="Performing Interface" />
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
