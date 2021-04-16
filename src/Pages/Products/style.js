import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";

export const ProdutosContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 60vw;
  }

  .produtos-pesquisa {
    width: 100%;
  }

  .produtos-categorias {
    width: 100%;
    height: 80px;
  }

  .produtos-cards {
    width: 90%;
  }
`;

export const PaginationContainer = styled(Pagination)`
  margin: 1rem auto;
  font-size: 1rem;
  text-align: center;
  padding: 0 0 15vh 0;
`;
