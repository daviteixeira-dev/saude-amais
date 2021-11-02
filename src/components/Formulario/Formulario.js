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
import TextMaskCustomCEP from './FormSelect/TextMaskCustomCEP';

function Formulario({ setIsLogin }) {

  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{width: `100%`, alignItems: 'center', display: `flex`}}>
        <Typography
          variant="body2"
          pr={2}
          fontSize={16}
          color="textSecondary"
          width="100%"
          align="right"
          sx={{marginBottom: '1em'}}>
            Já é cadastrado?
        </Typography>
        <Button
          onClick={() => setIsLogin(true)}
          padding="2em"
          variant="outlined"
          color="primary"
          sx={{ marginBottom: '1em' }}
        >Entrar
        </Button>
      </Box>
      <Container
      maxWidth="sm"
      sx={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
            > Cadastro
        </Typography>
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
          <Stack spacing={2} direction="row" width='100%' alignItems="center">
            <SelectDatePicker />
            <TextMaskCustomCPF/>
          </Stack>
        </Stack>

        <Stack direction="column" width='100%'>



          <Stack direction="row" width='100%' alignItems="center" mt={2}>
            <TextMaskCustomCEP/>

            <TextField
              variant="filled"
              required
              id="cidade"
              label="Cidade"
              fullWidth
            />

            <SelectVariants />

          </Stack>
          <Stack spacing={2} direction="row" width='100%' alignItems="center">
            <TextField
              fullWidth
              variant="filled"
              id="rua"
              label="Rua"
              type="text"
            />
            <TextField
              fullWidth
              variant="filled"
              id="bairro"
              label="Bairro"
              type="text"
            />
          </Stack>
        </Stack>
        <FormButton />
      </Container >
    </Box >
  );
}
export default Formulario
