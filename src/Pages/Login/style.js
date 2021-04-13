import styled from "styled-components";

export const PageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #933fff;
  overflow: hidden;

  .purpleClouds {
    z-index: 1000;
    overflow: hidden;
  }

  .cloud1 {
    display: none;
    position: absolute;
    bottom: 0;
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
    bottom: 5%;
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
    bottom: 40%;
    right: 16%;
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

    path {
      overflow: hidden;
    }
  }

  .cloud4 {
    display: none;
    position: absolute;
    bottom: 50%;
    right: 5%;
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

    path {
      overflow: hidden;
    }
  }
`;

export const LoginContainer = styled.div`
  background: rgba(246, 242, 249, 1);
  backdrop-filter: blur(8px);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  min-width: 100vw;
  height: 60vh;
  padding-bottom: 5px;
  padding-top: 40px;
  z-index: 1000;

  h4 {
    color: #927dad;
  }

  @media (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 350px;
    border-radius: 24px;
    height: 350px;
    background: rgba(246, 242, 249, 0.8);
    backdrop-filter: blur(8px);

    h4 {
      display: none;
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
    z-index: 1000;
  }
`;
