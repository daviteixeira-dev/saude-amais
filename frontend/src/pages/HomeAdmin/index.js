import { useContext, useEffect, useState } from "react";

import { Box, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material/";

import Cadastro from "./Fomulario";
import QuadroDeHoras from "../../components/QuadroDeHoras";

import { DataContext } from "../../contexts/DataContext";

export default function HomeAdmin() {

  const [places, setPlaces] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [modalities, setModalities] = useState([]);
  const [hours, setHours] = useState([]);

  const { state, data, deleteData } = useContext(DataContext);

  function handleDeletePlace(id) {
    deleteData("places", id);
    const filtered = places.filter((item) => item.id !== id);
    setPlaces(filtered);
  }

  function handleDeleteTeachers(id) {
    deleteData("teachers", id);
    const filtered = teachers.filter((item) => item.id !== id);
    setTeachers(filtered);
  }

  function handleDeleteModalities(id) {
    deleteData("modalities", id);
    const filtered = modalities.filter((item) => item.id !== id);
    setModalities(filtered);
  }

  useEffect(async () => {
    setPlaces(await data("places/"));
    setTeachers(await data("teachers/"));
    setModalities(await data("modalities/"));
    const hours = await data("hours/");
    setHours(hours[hours.length - 1]);
  }, [state]);

  return (
    <Box bgcolor="#f2f2f2">
      <Typography variant="h1" fontSize={35} fontWeight="bold" pb={2} textAlign="center" mt={2}>
        Home Admin
      </Typography>

      <Typography component="p" fontSize={18} pb={2} textAlign="center">
        Página de gerenciamento de dados do site
      </Typography>

      <Grid container mt={2} direction="row" alignItems="flex-start" justifyContent="space-evenly" component="section">
        <Grid item lg={6} md={6} sm={10} xs={10}>
          <Cadastro />
        </Grid>
        <Grid item lg={6} md={6} sm={10} xs={10}>
          <QuadroDeHoras />
        </Grid>
      </Grid>

      <Typography variant="h2" fontSize={30} fontWeight="bold" pb={2} textAlign="center" mt={2} pt={2} bgcolor="#bbb">
        Tabela de Cadastros
      </Typography>
      <Grid container alignItems="flex-start" justifyContent="space-evenly" bgcolor="#ccc">
        {/* Local */}
        <Grid item mt={2} lg={3} md={3} sm={6} xs={10}>
          <Typography variant="h3" fontSize={25} fontWeight="bold" pb={2} textAlign="center">
            Local
          </Typography>
          <List>
            {places?.map((item) => (
              <ListItem key={item.id}>
                {item.name}
                <ListItemButton
                  sx={{
                    bgcolor: "#0288d1",
                    color: "#f2f2f2",
                    marginLeft: "1rem",
                    borderRadius: ".5rem",
                    textAlign: "center",
                    "&:hover": {
                      bgcolor: "#1565c0",
                    }
                  }} onClick={() => handleDeletePlace(item.id)}>
                  <ListItemText primary="Deletar" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        {/* Professor */}
        <Grid item mt={2} lg={3} md={3} sm={6} xs={10}>
          <Typography variant="h3" fontSize={25} fontWeight="bold" pb={2} textAlign="center">
            Professor(a)
          </Typography>
          <List>
            {teachers?.map((item) => (
              <ListItem key={item.id}>
                {item.name}
                <ListItemButton
                  sx={{
                    bgcolor: "#0288d1",
                    color: "#f2f2f2",
                    marginLeft: "1rem",
                    borderRadius: ".5rem",
                    textAlign: "center",
                    "&:hover": {
                      bgcolor: "#1565c0",
                    }
                  }} onClick={() => handleDeleteTeachers(item.id)}>
                  <ListItemText primary="Deletar" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        {/* Modalidade */}
        <Grid item mt={2} lg={3} md={3} sm={6} xs={10}>
          <Typography variant="h3" fontSize={25} fontWeight="bold" pb={2} textAlign="center">
            Modalidade
          </Typography>
          <List>
            {modalities?.map((item) => (
              <ListItem key={item.id}>
                {item.name}
                <ListItemButton
                  sx={{
                    bgcolor: "#0288d1",
                    color: "#f2f2f2",
                    marginLeft: "1rem",
                    borderRadius: ".5rem",
                    textAlign: "center",
                    "&:hover": {
                      bgcolor: "#1565c0",
                    }
                  }} onClick={() => handleDeleteModalities(item.id)}>
                  <ListItemText primary="Deletar" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        {/* Horários */}
        <Grid item mt={2} lg={1} md={3} sm={6} xs={10}>
          <Typography variant="h3" fontSize={25} fontWeight="bold" pb={2} textAlign="center">
            Horário
          </Typography>
          <List>
            {hours?.avaliable?.map((item) => (
              <ListItem key={item.hora}>{item.hora}</ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
