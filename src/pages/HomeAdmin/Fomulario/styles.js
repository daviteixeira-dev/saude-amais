import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    border-bottom: 1px solid #ccc;
    display: block;
    margin-bottom: 2rem;
  }
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`;
