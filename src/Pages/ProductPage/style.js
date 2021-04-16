import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";

export const ProdutosContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 70px;

  h1 {
    color: #380f52;
  }

  .produtos-pesquisa {
    width: 100%;

    @media (min-width: 768px) {
      width: 60vw;
    }
  }

  .produtos-categorias {
    width: 100%;
    height: 80px;

    @media (min-width: 768px) {
      width: 60vw;
    }
  }

  .produtos-cards {
    width: 100%;
    @media (min-width: 768px) {
      width: 60vw;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export const PaginationContainer = styled(Pagination)`
  margin: 1rem auto;
  font-size: 1rem;
  text-align: center;
  padding: 0 0 15vh 0;
`;
