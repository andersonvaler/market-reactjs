import styled from "styled-components";

export const Button = styled.button`
  color: #f6f2f9;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  background-color: #0ec977;
  width: 100%;
  max-width: 300px;
  height: 35px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.4s;
  &&:hover {
    background-color: #0e9977;
    color: #fff;
  }
`;
