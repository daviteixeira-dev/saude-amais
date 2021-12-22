/* React imports */
import React from "react";
import { Link } from "react-router-dom";

/* Material UI MakeStyles */
import { makeStyles } from "@material-ui/styles";

/* Imports of UI material components */
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Hidden,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Toolbar,
} from "@mui/material";

/* Imports of Material UI Icons */
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const useStyles = makeStyles({
  btn: {
    border: 0,
    borderRadius: 3,
    padding: "0 30px",
    outlineColor: "white",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    background:
      "radial-gradient(circle,rgb(25 118 210) 0%,rgb(66 143 219) 100%)",
  },
});

const data = [
  { name: "Home", icon: <HomeOutlinedIcon /> },
  { name: "Sobre", icon: <ArrowForwardIcon /> },
  { name: "Horários", icon: <ArrowForwardIcon /> },
  { name: "Vagas", icon: <ArrowForwardIcon /> },
  { name: "Entrar", icon: <ArrowForwardIcon /> },
];

function MainMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );

  return (
    <Box sx={{ flexGrow: 1 }} component="nav">
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>

      <AppBar position="static" className={classes.btn}>
        <Container maxWidth="xl">
          <Toolbar>
            <Hidden smUp>
              <IconButton
                onClick={() => setOpen(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component="div"
                align="right"
                width="100%"
              >
                Saúde+
              </Typography>
            </Hidden>

            <Hidden smDown>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Saúde+
              </Typography>

              <Button color="inherit">
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  Sobre
                </Typography>
              </Button>

              <Button color="inherit">
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  Horários
                </Typography>
              </Button>

              <Button color="inherit">
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  Vagas
                </Typography>
              </Button>

              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#f2f2f2", mr: 2 }}
              >
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<i className="fas fa-sign-in-alt"></i>}
                >
                  <Typography
                    variant="h7"
                    component="div"
                    sx={{ flexGrow: 1 }}
                    style={{ color: "#FFF" }}
                  >
                    Entrar
                  </Typography>
                </Button>
              </Link>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default MainMenu;
