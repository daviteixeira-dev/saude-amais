import { Box, Grid } from "@mui/material/";
import capa from "../../images/saudeamais.png";
import { Container } from "@mui/material/";

function Banner(){
  return (
    <Box>
      <Container maxWidth="lg">
      <Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box component="img" src={capa} width="100%"></Box>
        </Grid>
      </Grid>
      </Container>
    </Box>
  )
}

export default Banner