import styled from "styled-components";

export const PedidosPageContainer = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-x: hidden;
  margin-top: 70px;
  margin-bottom: 70px;

  @media (min-width: 768px) {
    overflow-x: hidden;
    width: 80vw;
    padding-left: 20vw;
    padding-right: 20vw;
  }

  h1 {
    color: #380f52;
  }
`;

export const PedidosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;

  /* @media (min-width: 768px) {
    overflow-x: hidden;
  } */
`;
