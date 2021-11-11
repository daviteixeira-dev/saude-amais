import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Hidden } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Link } from "react-router-dom";


const useStyles = makeStyles({
  btn: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'radial-gradient(circle,rgb(25 118 210) 0%,rgb(66 143 219) 100%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    outlineColor: 'white',
    padding: '0 30px',
  },
});
//style={{background: '#2E3B55'}}

const data = [
  {
    name: "Home",
    icon: <HomeOutlinedIcon />,
  },
  { name: "Sobre", icon: <ArrowForwardIcon /> },
  { name: "Horários", icon: <ArrowForwardIcon /> },
  { name: "Vagas", icon: <ArrowForwardIcon /> },
  { name: "Entrar", icon: <ArrowForwardIcon /> },
];

export default function MenuPrincipalNew() {
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
      <Box sx={{ flexGrow: 1 }}>     
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
                <Typography variant="h6" component="div" align='right' width="100%">
              Saúde+
            </Typography>
            </Hidden>
            
            <Hidden smDown>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Saúde+
            </Typography>
            <Button
            color="inherit" >
            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
              Sobre
            </Typography>
          </Button>
          <Button
            color="inherit" >
            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
              Horários
            </Typography>
          </Button>
          <Button
            color="inherit" >
            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
              Vagas
            </Typography>
          </Button>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#f2f2f2", mr: 2 }}
          >
            <Button variant="outlined" color="inherit" startIcon={<i className="fas fa-sign-in-alt"></i>} >
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }} style={{color: '#FFF'}}>
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
