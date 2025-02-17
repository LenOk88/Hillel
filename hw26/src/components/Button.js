import styled from "styled-components";

const Button = styled.button`
  background-color: lightblue;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  width: 150px;
  height: 80px;

  &:hover {
    background-color: lightgreen;
  }

  &:active {
    background-color: darkblue;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
