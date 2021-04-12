import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #933fff;
  .cloud1 {
    position: absolute;
    bottom: 2%;
    left: 12%;
    overflow: hidden;
    animation: surgirTopo 11s alternate infinite;
    @keyframes surgirTopo {
      0% {
        transform: translateY(-15%);
      }
      100% {
        transform: translateY(0);
        transform: translateX(-5%);
      }
    }
    @media (max-width: 900px) {
      display: none;
    }
  }
  .cloud2 {
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
    overflow: hidden;
    animation: surgirBaixo 11s alternate infinite;
    @keyframes surgirBaixo {
      0% {
        transform: translateY(10%);
      }
      100% {
        transform: translateY(0);
      }
    }
    @media (max-width: 900px) {
      bottom: 0;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    overflow: hidden;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: surgirDireita 1.15s backwards;
  @keyframes surgirDireita {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    justify-content: flex-start;
    height: 50%;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  animation: surgirEsquerda 1.15s backwards;
  @keyframes surgirEsquerda {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @media (max-width: 900px) {
    align-items: flex-start;
    height: auto;
    width: 100%;
    align-items: center;
  }
`;

export const Msg = styled.p`
  margin-top: 11rem;
  width: 70%;
  height: auto;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: justify;
  span {
    color: #c4fd2e;
  }
  @media (max-width: 900px) {
    justify-content: center;
    height: 50%;
    margin-top: 4rem;
  }
`;
