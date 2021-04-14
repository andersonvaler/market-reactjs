import styled from "styled-components";
import { Button } from "../Button/PrimaryButton/style";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    color: #380f52;
    margin: 12px 0;
  }

  span {
    color: #0ec977;
    cursor: pointer;
  }

  @media (min-width: 319px) and (max-width: 321px) {
    h5 {
      color: #380f52;
      margin: 6px 0;
    }
  }
`;

export const RegisterFormContainer = styled.div`
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

  @media (min-width: 319px) and (max-width: 321px) {
    p {
      color: red;
      height: 12px;
      font-size: 12px;
      margin: 2px 2px;
    }
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
  border-color: ${(props) => (props.error ? "red" : "rgba(213, 197, 232, 1)")};

  @media (min-width: 319px) and (max-width: 321px) {
    height: 32px;
  }
`;

export const RegisterButton = styled(Button)`
  padding: 6px 16px;
  max-width: 40vw;
`;

export const BiggerContainer = styled(Container)`
  width: 22rem;
  height: 34rem;
`;
