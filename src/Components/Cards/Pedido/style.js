import styled from "styled-components";

export const PedidoContainer = styled.main`
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 16px;
  background-color: #fff;
  margin-right: 15px;

  h2 {
    color: #380f52;
  }

  h3 {
    color: #927dad;
  }
`;

export const ProdutosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  width: 100%;
  min-height: 17rem;
`;
