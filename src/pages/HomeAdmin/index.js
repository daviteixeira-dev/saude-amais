import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import Agenda from "./Fomulario";
import QuadroDeHoras from "../../components/QuadroDeHoras";
import { DataContext } from "../../contexts/DataContext";

const ContainerCadastro = styled.div`
  background-color: #fafafa;
  margin: 2rem 0;
  padding: 2rem 0;
  display: flex;
  align-items: flex-start;
`;

const ContainerLists = styled.div`
  display: flex;
  justify-content: center;

  div {
    margin: 1rem;
    text-align: center;
    min-width: 20%;

    ul {
      list-style: none;
      text-align: center;
      /* display: flex; */
      /* justify-content: center; */
      /* flex-direction: column; */
      /* justify-content: flex-start; */
      /* align-items: flex-start; */
      margin: 0;
      padding: 0;
    }
  }
`;

export default function HomeAdmin() {
  const [places, setPlaces] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [modalities, setModalities] = useState([]);
  const [hours, setHours] = useState([]);

  const { state, data, deleteData } = useContext(DataContext);

  function handleDeletePlace(id) {
    deleteData("places", id);
    const filtered = places.filter((item) => item.id !== id);
    setPlaces(filtered);
  }

  function handleDeleteTeachers(id) {
    deleteData("teachers", id);
    const filtered = teachers.filter((item) => item.id !== id);
    setTeachers(filtered);
  }

  function handleDeleteModalities(id) {
    deleteData("modalities", id);
    const filtered = modalities.filter((item) => item.id !== id);
    setModalities(filtered);
  }

  useEffect(async () => {
    setPlaces(await data("places/"));
    setTeachers(await data("teachers/"));
    setModalities(await data("modalities/"));
    const hours = await data("hours/");
    setHours(hours[hours.length - 1]);
  }, [state]);

  return (
    <div>
      <h1>Home Admin</h1>
      <p>Pagina de gerenciamento de dados</p>
      <ContainerCadastro>
        <Agenda />
        <QuadroDeHoras />
      </ContainerCadastro>
      <ContainerLists>
        <div>
          <h3>Local</h3>
          <ul>
            {places?.map((item) => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => handleDeletePlace(item.id)}>
                  Deletar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Professor</h3>
          <ul>
            {teachers?.map((item) => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => handleDeleteTeachers(item.id)}>
                  Deletar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Modalidade</h3>
          <ul>
            {modalities?.map((item) => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => handleDeleteModalities(item.id)}>
                  Deletar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Horário</h3>
          <ul>
            {hours?.avaliable?.map((item) => (
              <li key={item.hora}>{item.hora}</li>
            ))}
          </ul>
        </div>
      </ContainerLists>
    </div>
  );
}
