import styled from "styled-components";
import { MdCreditCard, MdAttachMoney } from "react-icons/md";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";

export const Edit = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  h4 {
    color: #927dad;
    font-weight: 600;
    font-size: 0.9rem;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;

    h4 {
      margin-right: 8px;
    }
  }
`;

export const Topic = styled.div`
  width: 90%;
  text-align: left;
  font-size: 1.2rem;
  color: #380f52;
  margin-top: 1rem;
`;

export const Lojas = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
  overflow-x: scroll;

  @media (min-width: 768px) {
    width: 95%;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10vh;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ButtonCartao = styled.button`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.5rem;
  background: ${(props) => (props.selecionado ? "#E5D0FF" : "#f6f2f9")};
  cursor: pointer;
  border-radius: 8px;
  width: 90vw;
  color: ${(props) => (props.selecionado ? "#7000FF" : "#927DAD")};
  margin: 10px 15px;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;

  @media (min-width: 600px) {
    width: 40vw;
    font-weight: 600;
    font-size: 20px;
    max-width: 500px;
  }
`;

export const CardIcon = styled(MdCreditCard)`
  color: ${(props) => (props.selecionado ? "#7000FF" : "#927DAD")};
  font-size: 2rem;
  margin: 0 1rem 0 0.5rem;
`;

export const CardIconMoney = styled(MdAttachMoney)`
  color: ${(props) => (props.selecionado ? "#7000FF" : "#927DAD")};
  font-size: 2rem;
  margin: 0 1rem 0 0.5rem;
`;

export const CheckoutDiv = styled.div`
  margin-left: 24px;

  h1 {
    font-size: 1.2rem;
    text-align: left;
  }
`;

export const CheckIcon = styled(CheckRoundedIcon)`
  color: rgba(112, 0, 255, 1);
  margin: 4px;
`;
