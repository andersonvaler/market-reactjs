import styled from "styled-components";
import { Button } from "../Button/PrimaryButton/style";

export const Container = styled.div`
  width: 22rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background: rgba(246, 242, 249, 1);
  backdrop-filter: blur(8px);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding-bottom: 20px;
  padding-top: 5px;
  z-index: -2;
  animation: register 1.2s alternate;
  @keyframes register {
    0% {
      transform: translateY(-250%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @media (min-width: 768px) {
    min-width: 350px;
    border-radius: 24px;
    background: rgba(246, 242, 249, 0.8);
    backdrop-filter: blur(8px);
  }
`;

export const Header = styled.div`
  font-size: 2rem;
  color: #3a2552;
  justify-content: center;
  display: flex;
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
