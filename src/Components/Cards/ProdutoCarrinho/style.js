import styled from "styled-components";
import { MdDelete } from "react-icons/md";

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 16px;
  background: #f6f2f9;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
  margin: 1rem;
  max-width: 12rem;
`;

export const DivContador = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: #0ec977;
  margin: 20px 10px;
  border-radius: 8px;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
  width: 80%;
`;

export const ButtonDel = styled.button`
  display: flex;
  justify-content: center;
  background: #ff7b5a;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
  width: 80%;

  icon {
  }

  &&:hover {
    background-color: #ff5232;
    color: #fff;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 1.5rem;
  background: #0ec977;
  border-radius: 50%;
  cursor: pointer;

  &&:hover {
    background-color: #0e9977;
    color: #fff;
  }
`;

export const TituloCard = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: #380f52;
  margin: 0.3rem 0.5rem;
`;

export const DescricaoCard = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #927dad;
  width: 100%;
  min-height: 1.8rem;
  font-size: 0.9rem;
`;

export const ProdutoImg = styled.figure`
  width: 100%;
  height: 8rem;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;
`;

export const CardIcon = styled(MdDelete)`
  color: #fff;
  font-size: 1.5rem;
`;
