import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import SelectVariants from "./select";
import BasicButtons from "./button";

function Alunos() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Container maxWidth="sm">
        <div>
          <h1>Formulário</h1>

          <TextField
            required
            id="name"
            label="Nome"
          />

          <TextField
            required
            id="endereco"
            label="Endereço"
            type="endereco"
          />

          <TextField
            required
            id="cidade"
            label="Cidade"
          />

          <SelectVariants />

          <TextField
            id="number"
            label="Número"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="cep"
            label="CEP"
          />

          <TextField
            required
            id="outlined-required"
            label="Formação"
          />

          <TextField
            required
            id="email"
            label="email"
            type="email"
          />
        </div>
        <BasicButtons />
      </Container>
    </Box >
  );
}

export default Alunos;
