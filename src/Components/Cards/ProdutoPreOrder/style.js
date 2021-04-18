import styled from "styled-components";

export const Card = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  background: #f6f2f9;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
  margin: 0.3rem;
  width: 95%;
  height: 6rem;
  @media (min-width: 768px) {
    padding-bottom: 1rem;
    flex-direction: column;
    width: 12rem;
    max-height: 15rem;
    min-height: 14rem;
    margin: 1rem;
  }
`;

export const DivContador = styled.div`
  font-size: 1rem;
  color: #fff;
  font-weight: 800;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-evenly;
  background: #0ec977;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
  min-width: 15%;
  height: 100%;
  margin-left: 0.5rem;
  border-radius: 0 1rem 1rem 0;
  @media (min-width: 768px) {
    margin: 0;
    height: 1.4rem;
    flex-direction: row-reverse;
    width: 80%;
    border-radius: 4px;
    margin-top: 10px;
  }
`;

export const TituloCard = styled.p`
  color: #380f52;
  font-size: 0.9rem;
  margin: 0 0.5rem;
  font-weight: 700;
  text-align: left;
  line-height: 0.9rem;
  @media (min-width: 768px) {
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    margin: 0.3rem 0.5rem;
  }
`;

export const DescricaoCard = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: #927dad;
  width: 100%;
  min-height: 1.8rem;
  font-size: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-weight: 300;
  @media (min-width: 768px) {
    align-items: flex-start;
    font-size: 0.9rem;
    line-height: 0.9rem;
  }
`;

export const ProdutoImg = styled.figure`
  width: 100%;
  height: 100%;
  border-radius: 1rem 0 0 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    min-width: 100%;
    border-radius: 1rem 1rem 0 0;
  }
`;
