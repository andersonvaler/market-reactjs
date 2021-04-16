import styled from "styled-components";

export const PedidosPageContainer = styled.main`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;

  @media (min-width: 768px) {
    width: 60vw;
  }
`;

export const PedidosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
`;
