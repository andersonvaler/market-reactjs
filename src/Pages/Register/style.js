import styled from "styled-components";

export const PageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #b378ff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .Clouds {
    overflow: hidden;
    animation: opacidade 5s backwards;
    @keyframes opacidade {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .cloud1 {
    display: none;
    position: absolute;
    bottom: 50%;
    left: 5%;
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
    @media (min-width: 900px) {
      display: block;
    }
  }

  .cloud2 {
    display: none;
    position: absolute;
    bottom: 45%;
    left: 0;
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
    @media (min-width: 900px) {
      display: block;
    }
  }

  .cloud3 {
    display: none;
    position: absolute;
    bottom: 5%;
    right: 16%;
    overflow: hidden;
    animation: surgirTopo 11s alternate infinite;
    @keyframes surgirTopo {
      0% {
        transform: translateY(15%);
      }
      100% {
        transform: translateY(0);
        transform: translateX(-5%);
      }
    }
    @media (min-width: 900px) {
      display: block;
    }
  }

  .cloud4 {
    display: none;
    position: absolute;
    bottom: 0%;
    right: 5%;
    overflow: hidden;
    animation: surgirBaixo 11s alternate infinite;
    @keyframes surgirBaixo {
      0% {
        transform: translateY(-10%);
      }
      100% {
        transform: translateY(0);
      }
    }
    @media (min-width: 900px) {
      display: block;
    }
  }
`;

export const Msg = styled.h2`
  @media (min-width: 768px) {
    font-size: 32px;
    font-weight: 700;
    text-align: justify;
    margin-bottom: 16px;
  }
`;

export const SubMsg = styled.h3`
  @media (min-width: 768px) {
    font-size: 24px;
    text-align: justify;
  }
`;

export const TextContainer = styled.div`
  display: none;

  @media (min-width: 1400px) and (min-height: 900px) {
    display: flex;
    flex-direction: column;
    width: 45vw;
    color: #fff;
    margin-left: 32px;
    padding-top: 114px;
  }
`;
