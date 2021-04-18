import { FlipCameraIosRounded } from "@material-ui/icons";
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
    width: 90vw;
    @media (min-width: 768px) {
      justify-content: space-between;
      width: 60vw;
    }
  }

  .categoria {
    display: flex;
    flex-direction: column;
    width: 60%;

    @media (min-width: 768px) {
      width: 30%;
    }
  }
`;
