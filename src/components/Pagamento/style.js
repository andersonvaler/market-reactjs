import styled from "styled-components";
import { MdCreditCard } from "react-icons/md";

export const PagamentosContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  .metodo {
    width: 100%;
    height: 10vw;
    display: flex;
    color: #380f52;
    align-items: center;
    background-color: #e5d0ff;
    border-radius: 10px;
    justify-content: space-between;
    font-size: 1rem;
    margin-bottom: 1rem;
    transition: background-color 1s;
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
  }
`;

export const CardIcon = styled(MdCreditCard)`
  color: #380f52;
  font-size: 1.5rem;
`;
