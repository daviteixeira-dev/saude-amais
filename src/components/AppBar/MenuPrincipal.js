import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";

function MenuPrincipal() {
  return (
    <Box component="nav">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "#f2f2f2", flexGrow: 1 }}
          >
            <Button
              size="large"
              startIcon={<i className="fas fa-home"></i>}
              color="inherit">Início</Button>
          </Link>

          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#f2f2f2", mr: 2 }}
          >
            <Button
              size="large"
              sx={{ mr: 2 }}
              startIcon={<i className="fas fa-sign-in-alt"></i>}
              color="inherit">Entrar</Button>
          </Link>
          <Link

            to="/admin"
            style={{ textDecoration: "none", color: "#f2f2f2" }}
          >
            <Button
              size="large"
              startIcon={<i className="fas fa-user-cog"></i>}
              color="inherit">Admin</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MenuPrincipal;
