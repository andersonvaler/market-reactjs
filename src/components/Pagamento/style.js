import styled from "styled-components";
import { MdCreditCard } from "react-icons/md";

export const PagamentosContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 600px;
  }

  .metodo {
    width: 100%;
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
    @media (min-width: 600px) {
      width: 50%;
      height: 30px;
    }
  }

  .metodo:hover,
  .metodo:active {
    background-color: #7000ff;
  }

  .add {
    width: 100%;
    color: #0ec977;
    border-radius: 10px;
    background-color: #380f52;
    font-size: 0.5rem;
    height: 10vw;
    @media (min-width: 600px) {
      width: 50%;
      height: 30px;
    }
  }
`;

export const CardIcon = styled(MdCreditCard)`
  color: #380f52;
  font-size: 1.5rem;
`;

export const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #380f52;
  color: #0ec977;
`;
