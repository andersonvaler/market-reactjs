import styled from "styled-components";

export const PedidosPageContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 100px 0;
  padding: 0;
  flex-direction: column;
  table {
    margin: 0;
    padding: 0;
  }
  align-content: center;
  @media (min-width: 768px) {
    overflow: hidden;
    flex-direction: row;
    padding: 0 5rem;
  }

  h1 {
    width: 100%;
    background-color: #00000020;
    color: #380f52;
    font-size: 1.4rem;
    border-radius: 1rem 1rem 0 0;
    text-align: center;
    padding: 0.5rem;
  }
`;

export const LeftContainer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
  margin: 0;
  border: 1px solid #00000040;
  margin-bottom: 1rem;
  min-height: 80vh;
  border-radius: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 50%;
  }
`;

export const RightContainer = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #00000040;
  border-radius: 1rem;

  box-shadow: 0 0 0.2rem 0.01rem #00000090;

  @media (min-width: 768px) {
    width: 50%;
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
