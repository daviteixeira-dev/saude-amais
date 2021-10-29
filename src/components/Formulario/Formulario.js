import React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SelectVariants from "./FormSelect/SelectVariantes";
import SelectDatePicker from "./FormSelect/SelectDatePicker";
import FormButton from "./FormButton/FormButton";
import { Stack, Typography } from '@mui/material';
import Container from "@mui/material/Container";
import TextMaskCustomCPF from './FormSelect/TextMaskCustomCPF';
import Button from "@mui/material/Button";


function Formulario({setIsLogin}) {

  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1,  },
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{width: `100%`, alignItems: 'center', display: `flex`}}>
        <Typography variant="h5" pr={2} component="h2" width="100%" align="right" sx={{marginBottom: '1em'}}>
          Já é cadastrado?
        </Typography>
        <Button
          onClick={() => setIsLogin(true)}
          padding="2em"
          variant="outlined"
          color="primary"
          sx={{marginBottom: '1em'}}
          >Entrar
        </Button>
      </Box>
      <Container maxWidth="sm" sx={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
        <Typography variant="h3" component="h1" gutterBottom> Cadastro </Typography>
        <Stack direction="column" width='100%'>
          <Stack direction="row" width='100%'>
            <TextField
              variant="filled"
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
          <Stack spacing={2} direction="row" width='100%'>
            <SelectDatePicker />
            <TextMaskCustomCPF/>
          </Stack>
        </Stack>


        <TextField
          sx={{width: `100%`}}
          variant="filled"
          required
          id="endereco"
          label="Endereço"
          type="endereco"
        />

        <Stack direction="column" width='100%'>
          <Stack direction="row" width='100%'>
            <TextField
              variant="filled"
              required
              id="cidade"
              label="Cidade"
              fullWidth
            />

            <SelectVariants />

          </Stack>
          <Stack spacing={2}  direction="row" width='100%'>
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
          </Stack>
        </Stack>

        <FormButton />
      </Container>
    </Box >
  );
}

export default Formulario
