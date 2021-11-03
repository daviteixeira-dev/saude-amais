import { memo, useState } from "react";

import { Container, Formulario, InputWrapper } from "./styles";
import SaveButton from "../../../components/SaveButton";
import Input from "./Input";

export default memo(function Agenda() {
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
    <Container>
      <h1>Cadastro</h1>
      <Formulario>
        <InputWrapper>
          <Input
            value={place}
            type="text"
            name="place"
            placeholder="Local"
            onChange={handlePlace}
          />
          <SaveButton
            btnName="Cadastrar Local"
            values={place}
            endPoint="places"
            onSaveInput={setPlace}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            value={teacher}
            type="text"
            name="teacher"
            id="teacher"
            placeholder="Professor"
            onChange={handleTeacher}
          />
          <SaveButton
            btnName="Cadastrar Professor"
            values={teacher}
            endPoint="teachers"
            onSaveInput={setTeacher}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            value={modality}
            type="text"
            name="modality"
            placeholder="Modalidade"
            onChange={handleModality}
          />
          <SaveButton
            btnName="Cadastrar Modalidade"
            values={modality}
            endPoint="modalities"
            onSaveInput={setModality}
          />
        </InputWrapper>
      </Formulario>
    </Container>
    // <QuadroDeHoras />
  );
});
