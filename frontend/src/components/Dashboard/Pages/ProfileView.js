import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import InputMask from "react-input-mask";
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';

import { useFormik } from "formik";
import axios from "axios";

const token = localStorage.getItem("token");

// Puxar dados do usuário logado

function Formulario({ setIsLogin }) {

  React.useEffect(() => {
    console.log(token);
    axios.get("http://localhost:3003/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if(response.status !==  200) {
        window.location.href = "/login";
        return;
      }
      console.log(response.data);
      formik.setFieldValue("name", response.data.name);
      formik.setFieldValue("lastname", response.data.lastname);
      formik.setFieldValue("email", response.data.email);
      formik.setFieldValue("password", response.data.password);
      formik.setFieldValue("cpf", response.data.cpf);
      formik.setFieldValue("birthday", response.data.birthday);
      const address = response.data.adress;
      const addressArray = address.split(",");
      formik.setFieldValue("city", addressArray[0]);
      formik.setFieldValue("uf", addressArray[1]);
      formik.setFieldValue("cep", addressArray[2]);
      formik.setFieldValue("road", addressArray[3]);
      formik.setFieldValue("hood", addressArray[4]);
    });
  }, []);

  const formik = useFormik({

    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      birthday: "",
      cpf: "",
      cep: "",
      uf: "",
      city: "",
      road: "",
      hood: "",
    },
    onSubmit: (values) => {

      axios.put("http://localhost:3003/user", values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        if(response.status !==  200) {
          window.location.href = "/login";
          return;
        }
        console.log(response.data);
      });
    },

  });

  return (

    <Box
      componente="section"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Container
        maxWidth="sm"
        sx={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}
      >


        <Typography variant="h3" component="h1" gutterBottom>
          {" "}
          Profile
        </Typography>

        <Box component="form" onSubmit={formik.handleSubmit}>

          <Stack direction="column" width="100%" mb={1}>
            <Typography
              variant="body2"
              color="#6495ED"
              component="p"
              align="left"
            >
              Informacoes de login
            </Typography>

            <Stack direction="row" width="100%" mb={1}>
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Stack>

            <Typography
              variant="body2"
              color="#6495ED"
              component="p"
              align="left"
            >
              Informações pessoais
            </Typography>
            <Stack direction="row" width="100%">
              <TextField
                variant="filled"
                id="name"
                label="Nome"
                type="text"
                fullWidth
                value={formik.values.name}
                onChange={formik.handleChange}
                error={
                  formik.touched.name && Boolean(formik.errors.name)
                }
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                variant="filled"
                id="lastname"
                label="Sobrenome"
                type="text"
                fullWidth
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
            </Stack>
            <Stack spacing={3} direction="row">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  id="birthday"
                  value={formik.values.birthday}
                  onChange={(formik.values.birthday)}
                  label="Data de nascimento"
                  renderInput={(params) => (
                    <TextField {...params}
                      fullWidth
                      variant="filled"
                      disabled
                    />
                  )}
                />
              </LocalizationProvider>

              <TextField
                variant="filled"
                id="cpf"
                label="CPF"
                type="text"
                disabled
                fullWidth
                value={formik.values.cpf}
                onChange={formik.handleChange}
              >
                <InputMask mask="999.999.999-99" maskChar=" " />
              </TextField>
            </Stack>
          </Stack>

          <Stack direction="column" width="100%">
            <Typography
              variant="body2"
              color="#6495ED"
              component="p"
              align="left"
            >
              Informações de endereço
            </Typography>
            <Stack direction="row" width="100%" alignItems="center">
              <TextField
                variant="filled"
                id="cep"
                label="CEP"
                type="text"
                fullWidth
                value={formik.values.cep}
                onChange={formik.handleChange}
                disabled
              >
                <InputMask mask="99999-999" maskChar=" " />
              </TextField>

              <TextField
                variant="filled"
                fullWidth
                disabled
                id="city"
                label="Cidade"
                value={formik.values.city}
                onChange={formik.handleChange}
              />

              <TextField
                variant="filled"
                fullWidth
                disabled
                id="uf"
                label="Estado"
                value={formik.values.uf}
                onChange={formik.handleChange}
              />
            </Stack>
            <Stack spacing={2} direction="row" width="100%" alignItems="center">
              <TextField
                fullWidth
                variant="filled"
                id="road"
                label="Rua"
                disabled
                value={formik.values.road}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                id="hood"
                label="Bairro"
                type="text"
                value={formik.values.hood}
                onChange={formik.handleChange}
                disabled
                error={
                  formik.touched.hood &&
                  Boolean(formik.errors.hood)
                }
                helperText={
                  formik.touched.hood && formik.errors.hood
                }
              />
            </Stack>
          </Stack>
          <Button
            sx={{ width: "100%", marginTop: 2, marginBottom: 4 }}
            type="submit"
            variant="contained"
          >
            Edit
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Formulario;
