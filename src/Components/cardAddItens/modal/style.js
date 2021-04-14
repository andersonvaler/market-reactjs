import styled from "styled-components";
import { Button } from "../../Button/PrimaryButton/style";

export const Container = styled.div`
  width: 20rem;
  height: 23rem;
  background-color: #f3ecf9;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  font-size: 1.8rem;
  color: #3a2552;
  justify-content: center;
  display: flex;
  padding: 1rem;
`;

export const Box = styled.div`
  padding: 0.2rem;
  height: 4rem;
`;

export const TextInput = styled.div`
  font-size: 1rem;
  color: #927dae;
`;

export const Input = styled.input`
  width: 19rem;
  height: 2rem;
  border-radius: 1rem;
  padding-left: 0.5rem;
  color: black;
`;

export const Error = styled.p`
  font-size: 0.8rem;
  color: red;
  opacity: 0.6;
`;

export const ButtonContainer = styled(Button)`
  margin-top: 1.5rem;
`;
