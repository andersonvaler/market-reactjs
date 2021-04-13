import styled from "styled-components";
import { Button } from "../Button/PrimaryButton/style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h5 {
    color: #380f52;
    margin: 12px 0;
  }

  span {
    color: #0ec977;
    cursor: pointer;
  }
`;

export const LoginFormContainer = styled.div`
  min-width: 80vw;
  border-radius: 16px;

  @media (min-width: 768px) {
    min-width: 300px;
  }
`;

export const Header = styled.div`
  font-size: 32px;
  color: #380f52;
  font-weight: bold;
  justify-content: center;
  display: flex;
`;

export const Box = styled.div`
  width: 100%;

  p {
    color: red;
    height: 12px;
    font-size: 12px;
    margin: 6px;
  }
`;

export const TextInput = styled.div`
  font-size: 1rem;
  margin: 1px 4px;
  width: 100%;
  color: ${(props) => (props.error ? "red" : "#927dae")};
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 16px;
  padding-left: 1.5rem;
  color: #380f52;
  border: 1px solid;
  width: 100%;
  border-color: ${(props) => (props.error ? "red" : "rgba(213, 197, 232, 1)")};
`;

export const BoxLogin = styled.div`
  padding: 1.8rem;
  display: flex;
  justify-content: center;
`;

export const Link = styled.a`
  color: #54cd87;
`;

export const LoginButton = styled(Button)`
  padding: 6px 16px;
  max-width: 40vw;
`;
