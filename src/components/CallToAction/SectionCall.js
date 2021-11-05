import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material/";
import img from "../../images/11.jpg"

const useStyles = makeStyles(theme => ({
  backimg: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
    height: "250px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
  },

}));

function SectionCall() {
  return (
    <Box className={useStyles().backimg} component="section">
      <Grid
        container
        py={4}
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button size="large" variant="contained">Agende uma aula experimental Gratis</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionCall;
