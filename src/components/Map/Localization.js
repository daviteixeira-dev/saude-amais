/* React imports */
import React from "react";

/* Imports of UI material components */
import { Box, Grid, Typography } from "@mui/material/";

function Localizacao() {
  return (
    <Box sx={{ textAlign: "center", bgcolor: "#f2f2f2" }} component="section">
      <Typography pt={4} pb={4} variant="h2" fontSize="25px" fontWeight="bold">
        Encontre-nos
      </Typography>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.220960608842!2d-38.48386608588363!3d-3.762024644396266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f70de378215%3A0xa927b7d2fc0ce76a!2sInstituto%20Atl%C3%A2ntico!5e0!3m2!1spt-BR!2sbr!4v1635285033059!5m2!1spt-BR!2sbr`}
            height={350}
            width={"100%"}
            style={{ border: 0 }}
            loading="lazy"
            title="mapa"
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Localizacao;
