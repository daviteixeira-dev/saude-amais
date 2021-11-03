import { useContext, useEffect, useState } from "react";
import gerarHoras from "../../utils/gerarHoras";

import styled from "styled-components";
import { DataContext } from "../../contexts/DataContext";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    border: none;
    border-radius: 0.5rem;
    background-color: #ededed;
    color: #666;
    margin-left: 1rem;
    margin-top: 1rem;
    min-width: 12rem;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-out;

    &:hover {
      box-shadow: 0 0 0.1rem #aaa;
      background-color: #dedede;
    }

    &:active {
      background-color: #cecece;
      box-shadow: 0 0 0.1rem #888;
    }

    &:disabled {
      background: #bbb;
      color: #999;
      cursor: not-allowed;
    }
  }
`;

const ContainerHoras = styled.section`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;

  .hora {
    background-color: #3a4dfa;
    border-radius: 0.25rem;
    color: white;
    font-size: 0.875rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-out;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #124dcc;
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }

  .selected {
    background-color: #ccc;
    border-radius: 0.25rem;
    color: #666;
    font-size: 0.875rem;
    font-weight: bold;
    padding: 0.5rem 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s ease-out;

    &:hover {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }
`;

export default function QuadroDeHoras() {
  const [horas, setHoras] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const { data } = useContext(DataContext);

  async function handleClick(hora) {
    const result = horas.map((item) => {
      if (item.hora === hora) {
        item.disponivel = !item.disponivel;
      }
      return item;
    });

    if (result.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }

    setHoras(result);
  }

  async function handleSubmitHours() {
    const res = await data("hours/");

    const filteredHours = horas.filter((hora) => hora.disponivel);

    if (res.length < 1) {
      console.log("entrou no vazio");
      fetch("http://localhost:3000/hours/", {
        method: "POST",
        body: JSON.stringify({ avaliable: filteredHours }),
        headers: { "Content-Type": "application/json" },
      });
      return;
    }

    fetch("http://localhost:3000/hours/1", {
      method: "PUT",
      body: JSON.stringify({ avaliable: filteredHours }),
      headers: { "Content-Type": "application/json" },
    });
  }

  useEffect(() => {
    const listaDeHoras = gerarHoras(8, 16);
    const result = listaDeHoras.map((hora) => {
      const novaHora = { hora, disponivel: false };
      return novaHora;
    });

    setHoras(result);
  }, []);

  return (
    <Container>
      <h3>Horáios</h3>
      <p>Selecione os horários para ficarem disponíveis</p>
      <ContainerHoras>
        {horas?.map((item) => (
          <div
            className={item.disponivel ? "hora" : "selected"}
            key={item.hora}
            onClick={() => handleClick(item.hora)}
          >
            {item.hora}
          </div>
        ))}
      </ContainerHoras>
      <button
        type="button"
        onClick={() => handleSubmitHours()}
        disabled={isDisabled}
      >
        Cadastrar Horas
      </button>
      {/* <SaveButton
        onClick={() => handleSubmitHours()}
        btnName="Cadastrar Horas"
        values={horasSelecionadas}
        endPoint="hours"
      /> */}
    </Container>
  );
}
