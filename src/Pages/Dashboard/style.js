import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  margin-top: 5rem;
  margin-bottom: 5rem;
  overflow-x: hidden;

  h1 {
    width: 100%;
    font-size: 1.3rem;
    color: #380f52;
    margin-left: 0.8rem;
  }

  h3 {
    width: 100%;
    font-size: 1rem;
    color: #927dad;
    margin-left: 0.8rem;
  }

  @media (min-width: 768px) {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .cardIntro {
    display: none;
    @media (min-width: 768px) {
      width: 100%;
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
      width: 100%;
      overflow-x: hidden;
    }
  }

  .produtos {
    padding: 0 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* @media (min-width: 768px) {
      width: 100%;
    } */
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
