/* React imports */
import React from 'react';

/* Material UI MakeStyles */
import { makeStyles } from "@material-ui/styles";

/* Image imports */
import teacher01 from "../../images/teacher_pilates_01.jpg";

/* Imports of UI material components */
import { AppBar, Avatar, Box, Button, Drawer, Grid, Typography, Toolbar } from '@mui/material';

const useStyles = makeStyles({
  DrawerStyle: {
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 240,
      alignItems: "center",
      boxSizing: 'border-box',
    },
  }
})

function Layout(){

  const classes = useStyles();

  return (
    <Box>
      <Grid container height="100vw">
        <Grid item>
          <Drawer
            className={classes.DrawerStyle}
            variant="permanent"
            anchor="left"
          >
            <Avatar alt="Remy Sharp" src={teacher01} sx={{ width: 100, height: 100, marginTop: "1em" }} />
            <Typography my={2}>Admin: Seu Nome</Typography>
            <Box my={2}>
              <Button variant="contained" startIcon={<i class="fas fa-user-alt"></i>}>Perfil</Button>
            </Box>
            <Box my={2}>
              <Button variant="contained" startIcon={<i class="fas fa-cog"></i>}>Opções</Button>
            </Box>
            <Box my={2}>
              <Button variant="contained" startIcon={<i class="fas fa-sign-out-alt"></i>}>Sair</Button>
            </Box>
          </Drawer>
        </Grid>
        <Grid item>
          <AppBar>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Box width="80%" display="flex" justifyContent="space-evenly">
                <Button color="inherit">
                  Home
                </Button>
                <Button color="inherit">
                  Alunos
                </Button>
                <Button color="inherit">
                  Modalidades
                </Button>
                <Button color="inherit">
                  Professores
                </Button>
                <Button color="inherit">
                  Vagas
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Layout;