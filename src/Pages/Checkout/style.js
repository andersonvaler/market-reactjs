import styled from "styled-components";
import { MdCreditCard, MdAttachMoney } from "react-icons/md";

export const Edit = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  h4 {
    color: #927dad;
  }
`;

export const Topic = styled.div`
  width: 90%;
  text-align: left;
  font-size: 1.25rem;
  color: #380f52;
  margin-top: 2rem;
`;

export const Lojas = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    width: 60vw;
    overflow-x: hidden;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10vh;
`;

export const ButtonCartao = styled.button`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  background: #f6f2f9;
  border-radius: 8px;
  width: 20vw;
  color: #927dad;
  margin: 10px 15px;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;

  :hover {
    background: #e5d0ff;
  }

  @media (min-width: 768px) {
    width: 40vw;
    font-weight: 600;
    font-size: 20px;
  }
`;

export const CardIcon = styled(MdCreditCard)`
  color: #380f52;
  font-size: 2rem;
`;

export const CardIconMoney = styled(MdAttachMoney)`
  color: #380f52;
  font-size: 2rem;
`;
