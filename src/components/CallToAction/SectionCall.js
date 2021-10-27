import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Button } from "@mui/material/";
import styles from "./SectionCall.module.css";

function SectionCall() {
  return (
    <section>
      <Box>
        <Grid
          container
          py={4}
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          sx={{ bgcolor: "#a8a8a8" }}
        >
          <Grid item>
            <Link to="/cadastro" className={styles.linkFor}>
              <Button variant="contained">
                Agendar uma Aula
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default SectionCall;
