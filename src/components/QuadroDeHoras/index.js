import { useContext, useEffect, useState } from "react";

import { Box, Button, Grid, Typography } from "@mui/material/";

import gerarHoras from "../../utils/gerarHoras";

import { DataContext } from "../../contexts/DataContext";

export default function QuadroDeHoras(){

  const [horas, setHoras] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const { data } = useContext(DataContext);

  async function handleClick(hora) {
    const result = horas.map((item) => {
      if (item.hora === hora) {
        item.disponivel = !item.disponivel;
      }
      return item;
    });

    if (result.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }

    setHoras(result);
  }

  async function handleSubmitHours() {
    const res = await data("hours/");

    const filteredHours = horas.filter((hora) => hora.disponivel);

    if (res.length < 1) {
      console.log("entrou no vazio");
      fetch("http://localhost:3000/hours/", {
        method: "POST",
        body: JSON.stringify({ avaliable: filteredHours }),
        headers: { "Content-Type": "application/json" },
      });
      return;
    }

    fetch("http://localhost:3000/hours/1", {
      method: "PUT",
      body: JSON.stringify({ avaliable: filteredHours }),
      headers: { "Content-Type": "application/json" },
    });
  }

  useEffect(() => {
    const listaDeHoras = gerarHoras(8, 16);
    const result = listaDeHoras.map((hora) => {
      const novaHora = { hora, disponivel: false };
      return novaHora;
    });

    setHoras(result);
  }, []);

  return (
    <Grid container direction="column" alignItems="center" component="section">
      <Grid item>

        <Typography variant="h2" fontSize={25} fontWeight="bold" pb={2} textAlign="center">
          Horários
        </Typography>

        <Typography pb={2} textAlign="center">
          Selecione os horários para ficarem disponíveis
        </Typography>

        <Box mb={2} sx={{ display: "grid", gap: "0.5", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {horas?.map((item) => (
            <Box
              sx={{
                bgcolor: "#ccc",
                borderRadius: "0.25rem",
                color: "#666",
                fontSize: "0.875rem",
                fontWeight: "bold",
                padding: "0.5rem 1rem",
                transition: "all 0.2s ease-out",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: ".5rem",
                cursor:"pointer",
                boxShadow: "0 0 0.25rem rgba(0, 0, 0, 0.3)",
                "&:hover": {
                  bgcolor: "#3a4dfa",
                  color: "#f2f2f2"
                },
                // não consegui manter a cor depois de clicar
              }}

              className={item.disponivel ? "hora" : "selected"}
              key={item.hora}
              onClick={() => handleClick(item.hora)}
            >
              {item.hora}
            </Box>
          ))}
        </Box>
      </Grid>

      <Button variant="contained" type="button" onClick={() => handleSubmitHours()} disabled={isDisabled}>
          Cadastrar Horas
      </Button>

    </Grid>
  );
}
