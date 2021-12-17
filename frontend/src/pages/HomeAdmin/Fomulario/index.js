import { memo, useState } from "react";

import { Grid, TextField, Typography } from "@mui/material/";

import SaveButton from "../../../components/SaveButton";

export default memo(function Agenda(){

  const [place, setPlace] = useState("");
  const [teacher, setTeacher] = useState("");
  const [modality, setModality] = useState("");

  function handlePlace(event) {
    setPlace(event.target.value);
  }

  function handleTeacher(event) {
    setTeacher(event.target.value);
  }

  function handleModality(event) {
    setModality(event.target.value);
  }

  return (
    <Grid container direction="column" alignItems="center" component="section">
      {/* Formulario de cadastro de local, professor e modalidade */}
      <Typography variant="h2" fontSize={25} fontWeight="bold" pb={2}>
        Cadastrar
      </Typography>
      {/* Local */}
      <Grid item mb={2} display="flex" alignItems="center" justifyContent="center" width="100%">
        <TextField variant="filled" label="Local" name="place" type="text" value={place} onChange={handlePlace}/>
        <SaveButton btnName="Cadastrar" values={place} endPoint="places" onSaveInput={setPlace} />
        {/*<Button variant="contained" values={place} endPoint="places" onSaveInput={setPlace}>Cadastrar Local</Button>*/}
      </Grid>
      {/* Professor */}
      <Grid item mb={2} display="flex" alignItems="center" justifyContent="center" width="100%">
        <TextField variant="filled" label="Professor" id="teacher" name="teacher" type="text" value={teacher} onChange={handleTeacher}/>
        <SaveButton btnName="Cadastrar" values={teacher} endPoint="teachers" onSaveInput={setTeacher} />
        {/*<Button variant="contained" values={place} endPoint="places" onSaveInput={setPlace}>Cadastrar Local</Button>*/}
      </Grid>
      {/* Modalidade */}
      <Grid item mb={2} display="flex" alignItems="center" justifyContent="center" width="100%">
        <TextField variant="filled" label="Modalidade" name="modality" type="text" value={modality} onChange={handleModality}/>
        <SaveButton btnName="Cadastrar" values={modality} endPoint="modalities" onSaveInput={setModality} />
        {/*<Button variant="contained" values={place} endPoint="places" onSaveInput={setPlace}>Cadastrar Local</Button>*/}
      </Grid>
    </Grid>
  );
});
