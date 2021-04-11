import styled from "styled-components";
import { Button } from "../../Components/Button/PrimaryButton/style";

export const Container = styled.div`
  width: 22rem;
  height: 30rem;
  background-color: #f3ecf9;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  font-size: 2rem;
  color: #3a2552;
  justify-content: center;
  display: flex;
`;

export const Box = styled.div`
  padding: 0.2rem;
  padding-left: 1.5rem;
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

export const BoxLogin = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const Link = styled.a`
  color: #54cd87;
`;

export const Error = styled.p`
  font-size: 0.8rem;
  color: red;
  opacity: 0.6;
`;

export const ButtonContainer = styled(Button)``;
