import React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SelectVariants from "./FormSelect/SelectVariantes";
import SelectRadioGroup from "./FormSelect/SelectRadioGroup";
import SelectDatePicker from "./FormSelect/SelectDatePicker";
import TextMaskCustomPhone from "./FormSelect/TextMaskCustomCPF";
import ImageAvatars from "./FormSelect/ImageAvatars";
import FormButton from "./FormButton/FormButton";
import styles from './Formulario.module.css';
import { styled } from '@material-ui/styles';
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import TextMaskCustomCPF from './FormSelect/TextMaskCustomCPF';


function Formulario() {

  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1,  },
      }}
      noValidate
      autoComplete="off"
    >
      <Container maxWidth="sm" sx={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
        <h1>Formulário</h1>

        <Stack spacing={2} direction="row">
          <TextField
            variant="outlined"
            required
            id="name"
            label="Nome"
            fullWidth
          />

          <TextField
            variant="filled"
            required
            fullWidth
            id="email"
            label="Email"
            type="email"
          />
        </Stack>

        <SelectDatePicker />

        <TextMaskCustomCPF/>


        <TextField
          sx={{width: `100%`}}
          variant="filled"
          required
          id="endereco"
          label="Endereço"
          type="endereco"
        />

        <TextField
          variant="filled"
          required
          id="cidade"
          label="Cidade"
          fullWidth
        />

        <SelectVariants />

        <TextField
          variant="filled"
          id="number"
          label="Número"
          type="number"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          variant="filled"
          required
          fullWidth
          id="cep"
          label="CEP"
        />
        <FormButton />

      </Container>
    </Box >
  );
}

export default Formulario
