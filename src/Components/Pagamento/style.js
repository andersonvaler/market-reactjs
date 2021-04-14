import styled from "styled-components";
import { MdCreditCard } from "react-icons/md";

export const PagamentosContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 60vw;
  }

  .metodo {
    width: 90%;
    height: 10vw;
    display: flex;
    color: #380f52;
    align-items: center;
    background-color: #e5d0ff;
    border-radius: 10px;
    justify-content: space-around;
    font-size: 1rem;
    margin-bottom: 1rem;
    transition: background-color 1s;
    @media (min-width: 768px) {
      width: 45%;
      height: 40px;
    }
  }

  .metodo:hover,
  .metodo:active {
    background-color: #7000ff;
  }

  .add {
    width: 90%;
    color: #0ec977;
    border-radius: 10px;
    background-color: #380f52;
    font-size: 0.5rem;
    height: 10vw;
    @media (min-width: 768px) {
      width: 45%;
      height: 40px;
    }
  }
`;

export const CardIcon = styled(MdCreditCard)`
  color: #380f52;
  font-size: 2rem;
`;

export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #380f52;
  font-size: 1.2rem;
  color: #0ec977;
`;
