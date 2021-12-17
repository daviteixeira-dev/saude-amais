/* React imports */
import React from "react";
import { Link } from "react-router-dom";

/* Image imports */
import teacher01 from "../../images/teacher_pilates_01.jpg";

/* Imports of UI material components */
import { Avatar, Box, Button, Grid, Typography } from "@mui/material/";

/* Material UI MakeStyles */
import { makeStyles } from "@material-ui/styles";

import MainMenu from "../../components/AppBar/MainMenu";
import Calendar from "../../components/Consultancy/Calendar";
import FooterContainer from "../../components/Footer/containers/Footer";

const useStyles = makeStyles({
  skillTag: {
    fontWeight: 400,
    letterSpacing: 0,
    color: "#1dbd95",
    fontSize: "14px",
    marginRight: "10px",
    padding: "6px 12px",
    marginBottom: "10px",
    borderRadius: "20px",
    display: "inline-block",
    backgroundColor: "rgba(29, 189, 149, 0.1)",
  },
});

function PageProfessores() {
  const classes = useStyles();

  return (
    <Box component="section">
      <MainMenu />
      <Grid
        container
        my={4}
        spacing={4}
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid item alignSelf="start">
          <Button
            variant="outlined"
            startIcon={<i class="fas fa-arrow-left"></i>}
          >
            <Link
              to="/"
              style={{
                color: "#217bd4",
                fontSize: "1.3em",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Voltar
            </Link>
          </Button>
        </Grid>
        <Grid item>
          <Avatar
            alt="Professora Bruna Blue"
            src={teacher01}
            sx={{ width: 300, height: 300 }}
          />
        </Grid>
        <Grid item m={2} width={500}>
          <Typography variant="h1" fontSize="2em" fontWeight="bold" my={2}>
            Bruna Blue
          </Typography>
          <Typography variant="h2" fontSize="1.2em" my={2}>
            Professora e Fisioterapeuta
          </Typography>
          <Typography variant="p" fontSize="1em" my={2}>
            A Professora Bruna Blue é formada em fisioterapia pela Universidade
            Federal do Ceará e ela gosta de ensinar pilates para o seus alunos
            de forma alegre e divertida.
          </Typography>
          <Typography
            variant="h3"
            fontSize="1em"
            fontWeight="bold"
            mt={4}
            mb={2}
          >
            Realiza aulas sobre
          </Typography>
          <Box my={2}>
            <Typography
              variant="h4"
              fontSize=".8em"
              mt={2}
              mr={2}
              textAlign="start"
              className={classes.skillTag}
            >
              Modalidade 01
            </Typography>

            <Typography
              variant="h4"
              fontSize=".8em"
              mt={2}
              mr={2}
              textAlign="start"
              className={classes.skillTag}
            >
              Modalidade 02
            </Typography>

            <Typography
              variant="h4"
              fontSize=".8em"
              mt={2}
              mr={2}
              textAlign="start"
              className={classes.skillTag}
            >
              Modalidade 03
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Calendar />
      <FooterContainer />
    </Box>
  );
}

export default PageProfessores;
