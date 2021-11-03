import { useState } from "react";
import styled from "styled-components";

const InputItem = styled.input`
  appearance: none;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  color: #999;
  min-width: 10rem;
  outline: none;
  padding: 0.5rem;
  width: 100%;

  transition: all 0.2s ease-out;

  &::placeholder {
    color: #ccc;
    font-size: 0.875rem;
    font-weight: bold;
  }

  &:focus {
    border-color: #999;
    color: #666;
  }
`;

export default function Input(props) {
  const [state, setState] = useState("");

  function handleState(event) {
    setState(event.target.value);
  }

  return <InputItem {...props} />;
}
