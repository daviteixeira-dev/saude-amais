import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material/";

function SectionCall() {
  return (
    <Box sx={{ bgcolor: "#a8a8a8" }} component="section">
      <Grid
        container
        py={4}
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item>
          <Link to="/cadastro" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Agendar uma aula</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionCall;
