import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';

function MenuPrincipal(){
  return (
    <Box component="nav">
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: 'none', color: "#f2f2f2", flexGrow: 1 }}>
            <Button color="inherit">Início</Button>
          </Link>
          <Link to="/cadastro" style={{ textDecoration: 'none', color: "#f2f2f2" }}>
            <Button color="inherit">Cadastrar</Button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none', color: "#f2f2f2" }}>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MenuPrincipal