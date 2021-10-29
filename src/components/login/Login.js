import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Hidden,
} from "@mui/material/";

import pilatescard04 from "../../images/4138854.jpg";
import FormLogin from "./FormLogin";
import Formulario from "../Formulario/Formulario";

function Login() {

  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <Grid container spacing={0} columns={16} sx={{ height: `100vh` }} alignItems="center">
      <Hidden lgDown>
        <Grid item xs={8} sm={0} md={0} lg={7}  >
          <Card>
            <CardMedia component="img" height='650' image={pilatescard04} />
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