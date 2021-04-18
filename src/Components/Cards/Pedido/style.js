import styled from "styled-components";

export const PedidoContainer = styled.main`
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  margin-right: 15px;
  && > div {
    width: 100%;
  }
  h2 {
    color: #380f52;
  }

  h3 {
    color: #927dad;
  }
  input {
    width: 10rem;
    height: 32px;
    border-radius: 16px;
    padding-left: 1.5rem;
    color: #380f52;
    font-size: 1.3rem;
    font-weight: 700;
    margin: 10px;
    box-shadow: 0 0 0.2rem 0.01rem #00000090;
  }
  .send {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }

    .value {
      display: flex;
      align-items: center;
    }
  }
`;

export const ProdutosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-height: 35rem;
  overflow: scroll;

  @media (min-width: 768px) {
    max-height: 32rem;
  }
`;
