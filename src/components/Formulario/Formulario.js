import React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SelectVariants from "./FormSelect/SelectVariantes";
import FormButton from "./FormButton/FormButton";
import { Link } from "react-router-dom";


function Formulario() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}>

        <h1>Formulário</h1>

        <TextField
          required
          id="name"
          label="Nome"
          variant="filled"
        />

        <TextField
          required
          id="endereco"
          label="Endereço"
          type="endereco"
          variant="filled"
        />

        <TextField
          required
          id="cidade"
          label="Cidade"
          variant="filled"
        />

        <SelectVariants />

        <TextField
          id="number"
          label="Número"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          required
          id="cep"
          label="CEP"
          variant="filled"
        />

        <TextField
          required
          id="outlined-required"
          label="Formação"
          variant="filled"
        />

        <TextField
          required
          id="email"
          label="Email"
          type="email"
          variant="filled"
        />
        <FormButton />
        <div>já tem cadastro? <Link to="/login">entrar</Link></div>
      </Grid>
    </Box >
  );
}

export default Formulario
