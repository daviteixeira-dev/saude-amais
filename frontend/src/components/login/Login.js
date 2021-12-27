import React from "react";
import {
  Grid,
  Hidden,
} from "@mui/material/";
import { makeStyles } from '@material-ui/styles';
import FormLogin from "./FormLogin";
import Formulario from "../Formulario/Formulario";
import img from "../../images/10.png";

const useStyles = makeStyles((theme) => ({
  imgBackground: {
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function Login() {

  const [isLogin, setIsLogin] = React.useState(true);


  return (
    <Grid container spacing={0} columns={16} >
      <Hidden lgDown>
        <Grid item xs={0} sm={0} md={0} lg={7} className={useStyles().imgBackground}>
        </Grid>
      </Hidden>

      <Grid item xs={16} sm={16} md={16} lg={9} >
        {isLogin ? <FormLogin setIsLogin={setIsLogin}  /> : <Formulario setIsLogin={setIsLogin} />}
      </Grid>
    </Grid>

  )
}

export default Login;