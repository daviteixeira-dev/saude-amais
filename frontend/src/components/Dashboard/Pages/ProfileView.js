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

import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";


function Formulario({ setIsLogin }) {



  useEffect(() => {
    axios.get("http://localhost:3003/user/3bb812c5-40c3-43c9-9a75-4170655b202a")
    .then((res) => {
      formik.setFieldValue("name", res.data.name);
      formik.setFieldValue("lastname", res.data.lastname);
      formik.setFieldValue("email", res.data.email);
      formik.setFieldValue("password", res.data.password);
      formik.setFieldValue("birthday", res.data.birthday);
      formik.setFieldValue("cpf", res.data.cpf);
      formik.setFieldValue("road", res.data.adress);
    }

    )
  }, []);

  //console.log(String(profile?.name));



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

      console.log(values);



      const address = [values.city, values.uf, values.cep, values.road, values.hood];
      const user = [values.name, values.lastname, values.email, values.password, String(values.birthday), String(address), values.cpf, "student"];

      console.log(address);

      console.log(user);


      axios.post("http://localhost:3003/user", {
        "name": user[0],
        "lastname": user[1],
        "email": user[2],
        "password": user[3],
        "birth_data": user[4],
        "adress": user[5],
        "cpf": user[6],
        "type": user[7],
      }).then((response) => {
        <Redirect to="/admin" />
      });

    },
  });


  function onBlurCep(event, setFieldValue) {
    const { value } = event.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep.toString().length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
          setFieldValue("city", data.localidade);
          setFieldValue("road", data.logradouro);
          setFieldValue("hood", data.bairro);
          setFieldValue("uf", data.uf);
        });
    }
  }

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
              {/* <SelectDatePicker
                id="birthday"
                value={formik.values.birthday}
                onChange={(birthday) => formik.setFieldValue("date", birthday)}
                error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                helperText={formik.touched.birthday && formik.errors.birthday}
              /> */}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  id="birthday"
                  label="Data de nascimento"
                  value={formik.values.birthday}
                  onChange={(birthday) => formik.setFieldValue("birthday", birthday)}
                  renderInput={(params) => (
                    <TextField {...params}
                      fullWidth
                      variant="filled"
                      error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                      helperText={formik.touched.birthday && formik.errors.birthday}
                    />
                  )}
                />
              </LocalizationProvider>

              <InputMask
                mask="999.999.999-99"
                value={formik.values.cpf}
                onChange={formik.handleChange}
                disabled={false}
              >
                {() => (
                  <TextField
                    variant="filled"
                    fullWidth
                    id="cpf"
                    label="CPF"
                    error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                    helperText={formik.touched.cpf && formik.errors.cpf}
                  />
                )}
              </InputMask>
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
              <InputMask
                mask="99999-999"
                value={formik.values.cep}
                onChange={formik.handleChange}
                onBlur={(event) => onBlurCep(event, formik.setFieldValue)}
                disabled={false}
              >
                {() => (
                  <TextField
                    variant="filled"
                    fullWidth
                    id="cep"
                    label="CEP"
                    error={formik.touched.cep && Boolean(formik.errors.cep)}
                    helperText={formik.touched.cep && formik.errors.cep}
                  />
                )}
              </InputMask>

              <TextField
                variant="filled"
                fullWidth
                id="city"
                label="Cidade"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />

              <TextField
                variant="filled"
                fullWidth
                id="uf"
                label="Estado"
                value={formik.values.uf}
                onChange={formik.handleChange}
                error={formik.touched.uf && Boolean(formik.errors.uf)}
                helperText={formik.touched.uf && formik.errors.uf}
              />
            </Stack>
            <Stack spacing={2} direction="row" width="100%" alignItems="center">
              <TextField
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
                fullWidth
                variant="filled"
                id="hood"
                label="Bairro"
                type="text"
                value={formik.values.hood}
                onChange={formik.handleChange}
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
