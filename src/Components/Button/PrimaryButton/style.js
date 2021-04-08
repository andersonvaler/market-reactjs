import styled from "styled-components";

export const Button = styled.button`
  color: #f6f2f9;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  background-color: #0ec977;
  width: 100%;
  max-width: 18rem;
  height: 2.2rem;
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.4s;
  &&:hover {
    background-color: #0e9977;
    color: #fff;
  }
`;
