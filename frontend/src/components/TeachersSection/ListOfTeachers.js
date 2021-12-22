/* React imports */
import React from "react";
import { Link } from "react-router-dom";

/* Imports of UI material components */
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material/";

/* Image imports */
import teacher01 from "../../images/teacher_pilates_01.jpg";
import teacher02 from "../../images/teacher_pilates_02.jpg";
import teacher03 from "../../images/teacher_pilates_03.jpg";
import teacher04 from "../../images/teacher_pilates_04.jpg";

function ListOfTeachers() {
  return (
    <Box
      p={2}
      pb={4}
      sx={{ bgcolor: "#a8a8a8", textAlign: "center" }}
      component="section"
    >
      <Typography
        pb={4}
        variant="h2"
        sx={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
      >
        Nossos Professores
      </Typography>
      <Grid
        container
        spacing={4}
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        {/*Teacher 01*/}
        <Grid item lg={3} md={6} sm={6} xs={10}>
          <Card sx={{ borderRadius: "50%" }}>
            <CardActionArea>
              <Link to="/professores">
                <CardMedia
                  component="img"
                  image={teacher01}
                  alt="Foto de Blue Bird no Pexels"
                  height="260"
                />
              </Link>
            </CardActionArea>
          </Card>
          <Typography mt={2} variant="h3" sx={{ fontSize: 20 }}>
            Bruna Blue
          </Typography>
        </Grid>
        {/*Teacher 02*/}
        <Grid item lg={3} md={6} sm={6} xs={10}>
          <Card sx={{ borderRadius: "50%" }}>
            <CardActionArea>
              <Link to="/professores">
                <CardMedia
                  component="img"
                  image={teacher02}
                  alt="Foto de Ketut Subiyanto no Pexels"
                  height="260"
                />
              </Link>
            </CardActionArea>
          </Card>
          <Typography mt={2} variant="h3" sx={{ fontSize: 20 }}>
            Ketut Subiyanto
          </Typography>
        </Grid>
        {/*Teacher 03*/}
        <Grid item lg={3} md={6} sm={6} xs={10}>
          <Card sx={{ borderRadius: "50%" }}>
            <CardActionArea>
              <Link to="/professores">
                <CardMedia
                  component="img"
                  image={teacher03}
                  alt="Foto de Andres Ayrton no Pexels"
                  height="260"
                />
              </Link>
            </CardActionArea>
          </Card>
          <Typography mt={2} variant="h3" sx={{ fontSize: 20 }}>
            Andres Ayrton
          </Typography>
        </Grid>
        {/*Teacher 04*/}
        <Grid item lg={3} md={6} sm={6} xs={10}>
          <Card sx={{ borderRadius: "50%" }}>
            <CardActionArea>
              <Link to="/professores">
                <CardMedia
                  component="img"
                  image={teacher04}
                  alt="Foto de Mikhail Nilov no Pexels"
                  height="260"
                />
              </Link>
            </CardActionArea>
          </Card>
          <Typography mt={2} variant="h3" sx={{ fontSize: 20 }}>
            Mikhail Nilov
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ListOfTeachers;
