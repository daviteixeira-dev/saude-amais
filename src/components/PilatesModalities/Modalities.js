/* React imports */
import React from "react";
import { Link } from "react-router-dom";

/* Imports of UI material components */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CardActionArea,
  Grid,
  Typography,
} from "@mui/material/";

/* Image imports */
import pilatescard01 from "../../images/pilates_card_01.jpg";
import pilatescard02 from "../../images/pilates_card_02.jpg";
import pilatescard03 from "../../images/pilates_card_03.jpg";
import pilatescard04 from "../../images/pilates_card_04.jpg";

function Modalities() {
  return (
    <Box
      p={2}
      sx={{ bgcolor: "#f2f2f2", textAlign: "center" }}
      component="section"
    >
      <Typography pb={4} variant="h2" sx={{ fontSize: 25, fontWeight: "bold" }}>
        Conheça nossas modalidades
      </Typography>
      {/*Grid de Modalidades*/}
      <Grid
        container
        spacing={4}
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        {/*Card 01*/}
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Card>
            <CardActionArea>
              <Link to="/modalidades">
                <CardMedia
                  component="img"
                  image={pilatescard01}
                  alt="Foto de Li Sun no Pexels"
                />
              </Link>
            </CardActionArea>
            <CardContent>
              <Typography variant="h3" sx={{ fontSize: 20 }}>
                Modalidade 01
              </Typography>
              <Typography mt={2} component="div" sx={{ fontSize: 16 }}>
                Texto aleatorio para preencher esse card já que não tenho
                informações sobre as modalidades do pilates.
              </Typography>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Link to="/modalidades" style={{ textDecoration: "none" }}>
                  <Button size="small" variant="contained">
                    Veja Sobre
                  </Button>
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        {/*Card 02*/}
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Card>
            <CardActionArea>
              <Link to="/modalidades">
                <CardMedia
                  component="img"
                  image={pilatescard02}
                  alt="Foto de Li Sun no Pexels"
                />
              </Link>
            </CardActionArea>
            <CardContent>
              <Typography variant="h3" sx={{ fontSize: 20 }}>
                Modalidade 02
              </Typography>
              <Typography mt={2} component="div" sx={{ fontSize: 16 }}>
                Texto aleatorio para preencher esse card já que não tenho
                informações sobre as modalidades do pilates.
              </Typography>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Link to="/modalidades" style={{ textDecoration: "none" }}>
                  <Button size="small" variant="contained">
                    Veja Sobre
                  </Button>
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        {/*Card 03*/}
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Card>
            <CardActionArea>
              <Link to="/modalidades">
                <CardMedia
                  component="img"
                  image={pilatescard03}
                  alt="Foto de Li Sun no Pexels"
                />
              </Link>
            </CardActionArea>
            <CardContent>
              <Typography variant="h3" sx={{ fontSize: 20 }}>
                Modalidade 03
              </Typography>
              <Typography mt={2} component="div" sx={{ fontSize: 16 }}>
                Texto aleatorio para preencher esse card já que não tenho
                informações sobre as modalidades do pilates.
              </Typography>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Link to="/modalidades" style={{ textDecoration: "none" }}>
                  <Button size="small" variant="contained">
                    Veja Sobre
                  </Button>
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        {/*Card 04*/}
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Card>
            <CardActionArea>
              <Link to="/modalidades">
                <CardMedia
                  component="img"
                  image={pilatescard04}
                  alt="Foto de Li Sun no Pexels"
                />
              </Link>
            </CardActionArea>
            <CardContent>
              <Typography variant="h3" sx={{ fontSize: 20 }}>
                Modalidade 04
              </Typography>
              <Typography mt={2} component="div" sx={{ fontSize: 16 }}>
                Texto aleatorio para preencher esse card já que não tenho
                informações sobre as modalidades do pilates.
              </Typography>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Link to="/modalidades" style={{ textDecoration: "none" }}>
                  <Button size="small" variant="contained">
                    Veja Sobre
                  </Button>
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/*End - Grid de Modalidades*/}
    </Box>
  );
}

export default Modalities;
