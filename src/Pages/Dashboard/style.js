import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
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
    padding-left: 20vw;
    padding-right: 20vw;
  }

  .cardIntro {
    display: none;
    @media (min-width: 768px) {
      width: 60vw;
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }
  }

  .cardImage {
    @media (min-width: 768px) {
      width: 100%;
      height: auto;
    }
  }

  .lojas {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
      width: 60vw;
      overflow-x: hidden;
    }
  }

  .produtos {
    width: 100vw;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      width: 60vw;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
    }
  }

  .produto {
    width: 95%;
    @media (min-width: 768px) {
      width: 40%;
    }
  }

  .categorias {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
    @media (min-width: 768px) {
      width: 100%;
      justify-content: center;
    }
  }

  .categoria {
    width: 95vw;
    height: 30vw;
    border-radius: 10px;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
      width: 60vw;
      height: 20vw;
    }
  }

  .categoriaDiv {
    text-align: initial;
  }
`;
