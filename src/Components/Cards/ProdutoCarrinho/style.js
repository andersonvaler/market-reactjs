import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 16px;
  background: #f6f2f9;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
  margin: 20px;
  max-width: 15vw;
`;

export const DivContador = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: #0ec977;
  margin: 20px 10px;
  border-radius: 8px;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
  min-width: 12vw;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 2.25vw;
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
  font-size: 18px;
  color: #380f52;
  margin: 20px 10px;
`;

export const DescricaoCard = styled.p`
  color: #927dad;
`;

export const ProdutoImg = styled.figure`
  width: 100%;
  height: 12vh;
  overflow: hidden;
  border-radius: 0 1rem 1rem 0;
`;
