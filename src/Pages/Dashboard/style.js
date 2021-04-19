import { CircularProgress } from "@material-ui/core";
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
    font-size: 1.3rem;
    color: #380f52;
  }

  h3 {
    width: 100%;
    font-size: 1rem;
    color: #927dad;
    margin-left: 0.8rem;
  }

  @media (min-width: 768px) {
    padding: 0 15vw;
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
    overflow-x: scroll;
    @media (min-width: 768px) {
      width: 100%;
    }
  }

  .produtos {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      width: 110%;
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
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    @media (min-width: 768px) {
      justify-content: space-between;
      flex-wrap: wrap;
      width: 80vw;
    }
  }

  .categoria {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      width: 30%;
    }
  }
`;

export const LoadingDiv = styled.div`
  z-index: 1000;
  height: 150%;
  min-width: 100vw;
  backdrop-filter: blur(35px);
  position: absolute;
  top: 0;

  background-color: rgba(255, 255, 255, 0.5);
`;

export const SpinStyled = styled(CircularProgress)`
  color: #0ec977 !important;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;
