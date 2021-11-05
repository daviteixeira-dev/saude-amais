import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Hidden,
  Box,
} from "@mui/material/";
import { makeStyles } from '@material-ui/styles';
import FormLogin from "./FormLogin";
import Formulario from "../Formulario/Formulario";
import img from "../../images/10.png";

const useStyles = makeStyles((theme) => ({
  imgBackground: {
    backgroundImage: `url(${img})`,
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function Login() {

  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <Grid container spacing={0} columns={16} sx={{ height: `100vh` }} alignItems="center">
      <Hidden lgDown>
        <Grid item xs={0} sm={0} md={0} lg={7}   >
          <Box maxWidth="xl" className={useStyles().imgBackground} width="100vh" height="100vh" />
          {/* <Card>
            <CardMedia component="img"   image={img} sx={{ height: `100vh`, width: `100vh`, boderRadius: 16}}/>
          </Card> */}
        </Grid>
      </Hidden>

      <Grid item xs={16} sm={16} md={16} lg={9}>
        {isLogin ? <FormLogin setIsLogin={setIsLogin} /> : <Formulario setIsLogin={setIsLogin} />}
      </Grid>
    </Grid>

  )
}

export default Login;