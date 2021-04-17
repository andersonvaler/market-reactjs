import styled from "styled-components";

export const DivProdutos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  width: 100%;
  min-height: 17rem;
`;

export const MainContainer = styled.main`
  width: 100vw;
  margin-top: 70px;
  margin-bottom: 70px;
  overflow-x: hidden;

  section {
    font-size: 0.9rem;
    margin: 0.4rem 0.8rem;
    color: #380f52;
    font-weight: 600;
    cursor: pointer;
  }

  h1 {
    width: 100%;
    text-align: center;
    color: #380f52;
    transform: translateY(50%);
  }

  h3 {
    color: #927dad;
    font-size: 1rem;
    margin-left: 0.8rem;
  }

  @media (min-width: 768px) {
    padding-left: 10vw;
    padding-right: 10vw;
  }
`;

export const Footer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 100vw;
  bottom: 0;
  left: 0;
  height: 13vh;
  border: 1px solid #d5c5e8;
  background: #f6f2f9;
`;

export const Contador = styled.p`
  font-size: 1rem;
  color: #380f52;
  font-weight: 600;
  margin-left: 0.5rem;
`;
