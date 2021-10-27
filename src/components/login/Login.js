import React from "react";
import { styled } from '@material-ui/styles';
import { Link } from "react-router-dom";
import styles from "./styles/login.module.css";

import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  IconButton,
  Card,
  CardMedia,
  Hidden,
} from "@mui/material/";
import { green } from "@mui/material/colors";
import pilatescard04 from "../../images/4138854.jpg";

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#fff',

  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
}));



function Login() {
  return (
    <Grid container spacing={0} columns={16} sx={{ height: `100vh` }} alignItems="center">
      <Hidden lgDown>
        <Grid item xs={8} sm={6} md={0} lg={8}>
          <Card>
            <CardMedia component="img" height="700" image={pilatescard04} />
          </Card>
        </Grid>
      </Hidden>

      <Grid item xs={16} sm={16} md={16} lg={8}>
        <div>
          <Container fixed component="main" maxWidth="xs">
            <div className="mt-3 mt-md-5">
              <div className="text-center">
                <Typography className="mt-3 font-weight-normal" component="h1" variant="h5">Faça seu login no Saúde+ </Typography>
              </div>

              <div className="mt-4" >
                <Button
                  variant="outlined"
                  startIcon={<i className="fab fa-google"></i>}
                > Entrar com o Google
                </Button>
                <IconButton>
                  <i className="fab fa-facebook-f"></i>
                </IconButton>
                <IconButton>
                  <i className="fab fa-twitter"></i>
                </IconButton>
                <IconButton>
                  <i className="fab fa-apple"></i>
                </IconButton>
              </div>

              <div>
                <p>Ou</p>
              </div>

              <div className="mt-4">
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                />

                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Senha"
                  name="password"
                  type="password"
                />
                <div>
                  <a href="/">Esqueceu sua senha?</a>
                </div>

                <Button
                  type="button"
                  variant="contained"
                  fullWidth
                  color="primary"
                  size="large"
                  className="mb-3 mb-mb-4 mt-4"
                > Entrar
                </Button>



                <Link to="/formulario" className={styles.linkFor}>
                  <ColorButton
                    type="button"
                    fullWidth
                    size="large"
                    variant="contained"
                    className="mb-3 mb-mb-4 mt-4"
                  >
                    Cadastrar
                  </ColorButton>
                </Link>


              </div>
            </div>
          </Container>
        </div>
      </Grid >
    </Grid >

  )
}

export default Login;