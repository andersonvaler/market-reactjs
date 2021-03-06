import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
  background-color: #0ec977;
  width: 100%;
  max-width: 18rem;
  height: 2rem;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.4s;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
  &&:hover {
    background-color: #0e9977;
    color: #fff;
  }
  &&:disabled {
    background: #00000060;
    color: #ffffff50;
  }
`;
