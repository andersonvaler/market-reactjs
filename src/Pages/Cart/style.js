import styled from "styled-components";

export const DivProdutos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MainContainer = styled.main`
  width: 100vw;
  margin-top: 70px;
  margin-bottom: 70px;
  overflow-x: hidden;

  h1 {
    color: #380f52;
  }

  h3 {
    color: #927dad;
  }

  @media (min-width: 768px) {
    padding-left: 25vw;
    padding-right: 25vw;
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

  p {
    font-size: 24px;
    color: #380f52;
    font-weight: 600;
  }
  font-size: 24px;
  color: #380f52;
`;
