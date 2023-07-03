import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '../Buttons/MultipleButton';

function NavBarHome() {
  const buttonTitles = ['Inicio', 'Acerca de', 'Contacto'];
  return (
    <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, backgroundColor: '#ffffff', color:'#000',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         S&S
        </Typography>
        <ButtonGroup titles={buttonTitles} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBarHome;
