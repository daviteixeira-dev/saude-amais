import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: #ededed;
  color: #666;
  margin-left: 1rem;
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

  &.save {
    font-weight: bold;
    background-color: mediumspringgreen;
    color: darkslategray;

    &:hover {
      cursor: default;
    }
  }
`;

export default Button;
