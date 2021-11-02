import { Box, Grid } from "@mui/material/";
import capa from "../../images/saudeamais.png";

function Banner(){
  return (
    <Box>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box component="img" src={capa} width="100%"></Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Banner