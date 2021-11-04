import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Hidden,
} from "@mui/material/";

import FormLogin from "./FormLogin";
import Formulario from "../Formulario/Formulario";
import img from "../../images/9.jpg";

function Login() {

  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <Grid container spacing={0} columns={16} sx={{ height: `100vh` }} alignItems="center">
      <Hidden lgDown>
        <Grid item xs={8} sm={0} md={0} lg={7}  >
          <Card>
            <CardMedia component="img"   image={img} sx={{ height: `100vh`, width: `100vh`, boderRadius: 16}}/>
          </Card>
        </Grid>
      </Hidden>

      <Grid item xs={16} sm={16} md={16} lg={9}>
        {isLogin ? <FormLogin setIsLogin={setIsLogin} /> : <Formulario setIsLogin={setIsLogin} />}
      </Grid>
    </Grid>

  )
}

export default Login;