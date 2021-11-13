import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SelectVariants from "./FormSelect/SelectVariantes";
import SelectDatePicker from "./FormSelect/SelectDatePicker";
import FormButton from "./FormButton/FormButton";
import { Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import TextMaskCustomCPF from "./FormSelect/TextMaskCustomCPF";
import Button from "@mui/material/Button";
import TextMaskCustomCEP from "./FormSelect/TextMaskCustomCEP";
import ImageAvatar from "./FormSelect/ImageAvatars";

import { useFormik } from "formik";
import * as Yup from "yup";

function Formulario({ setIsLogin }) {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      birthday: "",
    },
  })

  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >

      <Container
        maxWidth="sm"
        sx={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}>

      <Box alignItems="center" mb={4} sx={{ width: `100%`, display: `flex` }}>
        <Typography
          variant="body2"
          pr={2}
          fontSize={16}
          color="textSecondary"
          width="100%"
          align="right">
          Já é cadastrado?
        </Typography>
        <Button
          onClick={() => setIsLogin(true)}
          padding="2em"
          variant="outlined"
          color="primary"
          sx={{ marginTop: '1em' }}
        >Entrar
        </Button>
      </Box>

        <Typography
          variant="h3"
          component="h1"
          gutterBottom
        > Cadastro
        </Typography>

        <Typography variant='body2' color='#6495ED' component="p" align="left">Adicionar Imagem</Typography>

        <form maxWidth="sm">
          <ImageAvatar />

          <Stack direction="column" width='100%' mb={1}>


            <Typography variant='body2' color='#6495ED' component="p" align="left">Informacoes de login</Typography>

            <Stack direction="row" width='100%' mb={1}>
              <TextField
                variant="filled"
                required
                fullWidth
                id="email"
                label="Email"
                type="email"
                value={formik.values.email}
              />
              <TextField
                variant="filled"
                required
                fullWidth
                id="password"
                label="Senha"
                type="password"
                value={formik.values.password}
              />
            </Stack>

            <Typography variant='body2' color='#6495ED' component="p" align="left">Informações pessoais</Typography>
            <Stack direction="row" width='100%' >

              <TextField
                variant="filled"
                required
                id="firstName"
                label="Nome"
                fullWidth
                value={formik.values.firstName}
              />
              <TextField
                variant="filled"
                required
                id="lastName"
                label="Sobrenome"
                fullWidth
                value={formik.values.lastName}
              />
            </Stack>
            <Stack spacing={3} direction="row" >
              <SelectDatePicker
                value={formik.values.birthday}
              />
              <Stack direction="row" width="100%">
                <TextMaskCustomCPF />
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="column" width='100%'>
            <Typography variant='body2' color="#6495ED" component="p" align="left">Informações de endereço</Typography>
            <Stack direction="row" width='100%' alignItems="center">

              <TextMaskCustomCEP />

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
                required
                fullWidth
                variant="filled"
                id="rua"
                label="Rua"
                type="text"
              />
              <TextField
                required
                fullWidth
                variant="filled"
                id="bairro"
                label="Bairro"
                type="text"
              />
            </Stack>
          </Stack>
          <FormButton />

        </form>
      </Container >
    </Box >
  );
}
export default Formulario
