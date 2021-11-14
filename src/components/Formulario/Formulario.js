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
import InputMask from "react-input-mask";

import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Entre com email válido").required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
  firstName: Yup.string().required("Campo obrigatório"),
  lastName: Yup.string().required("Campo obrigatório"),
  // birthday: Yup.string().required("Campo obrigatório"),
  // cpf: Yup.string().required("Campo obrigatório"),
  // cep: Yup.string().required("Campo obrigatório"),
  // uf: Yup.string().required("Campo obrigatório"),
  // city: Yup.string().required("Campo obrigatório"),
  // road: Yup.string().required("Campo obrigatório"),
  // neighborhood: Yup.string().required("Campo obrigatório"),
})

function Formulario({ setIsLogin }) {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      birthday: "",
      cpf: "",
      cep: "",
      uf: "",
      city1: "",
      road: "",
      neighborhood: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: validationSchema,
  });

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

        <form maxWidth="sm" onSubmit={formik.handleSubmit}>
          <ImageAvatar />

          <Stack direction="column" width='100%' mb={1}>


            <Typography variant='body2' color='#6495ED' component="p" align="left">Informacoes de login</Typography>

            <Stack direction="row" width='100%' mb={1}>
              <TextField
                variant="filled"
                fullWidth
                id="email"
                label="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                variant="filled"
                fullWidth
                id="password"
                label="Senha"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Stack>

            <Typography variant='body2' color='#6495ED' component="p" align="left">Informações pessoais</Typography>
            <Stack direction="row" width='100%' >

              <TextField
                variant="filled"
                id="firstName"
                label="Nome"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField
                variant="filled"
                id="lastName"
                label="Sobrenome"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </Stack>
            <Stack spacing={3} direction="row" >
              <SelectDatePicker
                value={formik.values.birthday}
              />
              <Stack direction="row" width="100%">
                <InputMask
                  mask="999.999.999-99"
                  value={formik.values.cpf}
                  onChange={formik.handleChange}
                  disabled={false}
                >
                  {() => <TextField
                    variant="filled"
                    required
                    fullWidth
                    id="cpf"
                    label="CPF"
                    error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                    helperText={formik.touched.cpf && formik.errors.cpf}
                  />}
                </InputMask>
                {/* <TextMaskCustomCPF /> */}
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="column" width='100%'>
            <Typography variant='body2' color="#6495ED" component="p" align="left">Informações de endereço</Typography>
            <Stack direction="row" width='100%' alignItems="center">

              <InputMask
                mask="99999-999"
                value={formik.values.cep}
                onChange={formik.handleChange}
                disabled={false}
              >
                {() => <TextField
                  variant="filled"
                  required
                  fullWidth
                  id="cep"
                  label="CEP"
                  error={formik.touched.cep && Boolean(formik.errors.cep)}
                  helperText={formik.touched.cep && formik.errors.cep}
                />}
              </InputMask>

              {/* <TextMaskCustomCEP /> */}
              <TextField
                variant="filled"
                required
                fullWidth
                id="city1"
                label="Cidade"
                value={formik.values.city1}
                onChange={formik.handleChange}
                error={formik.touched.city1 && Boolean(formik.errors.city1)}
                helperText={formik.touched.city1 && formik.errors.city1}
              />

              <SelectVariants value={formik.values.uf} id="uf" onChange={formik.values.uf} />

            </Stack>
            <Stack spacing={2} direction="row" width='100%' alignItems="center">
              <TextField
                required
                fullWidth
                variant="filled"
                id="road"
                label="Rua"
                value={formik.values.road}
                onChange={formik.handleChange}
                error={formik.touched.road && Boolean(formik.errors.road)}
                helperText={formik.touched.road && formik.errors.road}
              />
              <TextField
                required
                fullWidth
                variant="filled"
                id="neighborhood"
                label="Bairro"
                type="text"
                value={formik.values.neighborhood}
                onChange={formik.handleChange}
                error={formik.touched.neighborhood && Boolean(formik.errors.neighborhood)}
                helperText={formik.touched.neighborhood && formik.errors.neighborhood}
              />
            </Stack>
          </Stack>
          <FormButton type="submit"/>
        </form>
      </Container >
    </Box >
  );
}
export default Formulario
