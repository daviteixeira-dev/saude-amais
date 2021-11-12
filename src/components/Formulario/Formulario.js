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

      <Container
        maxWidth="sm"
        sx={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}>

        <Box alignItems="center" mb={5} sx={{ width: `100%`, display: `flex` }}>
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
            />
            <TextField
              variant="filled"
              required
              fullWidth
              id="senha"
              label="Senha"
              type="password"
            />
          </Stack>

          <Typography variant='body2' color='#6495ED' component="p" align="left">Informações pessoais</Typography>
          <Stack direction="row" width='100%' >

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
              id="sobrenome"
              label="Sobrenome"
              fullWidth
            />
          </Stack>
          <Stack spacing={3} direction="row" >
            <SelectDatePicker />
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

            {/* <TextField
              variant="filled"
              required
              id="estado"
              label="Estado"
              fullWidth
            /> */}
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
      </Container >
    </Box >
  );
}
export default Formulario
