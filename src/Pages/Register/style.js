import styled from "styled-components";

export const PageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    props.userType === "user" ? "#b378ff" : "#C88CE6"};
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
    @media (min-width: 900px) and (min-height: 900px) {
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
    @media (min-width: 900px) and (min-height: 900px) {
      display: block;
    }
  }

  .cloud3 {
    display: none;
    position: absolute;
    bottom: 10%;
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
    bottom: 11%;
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

export const RegisterContainer = styled.div`
  background: rgba(246, 242, 249, 1);
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
  height: 90vh;
  padding-bottom: 5px;
  padding-top: 24px;
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
    height: 580px;
    background: rgba(246, 242, 249, 0.8);
    backdrop-filter: blur(4px);

    h4 {
      display: none;
    }

    animation: topo 1.2s alternate;
    @keyframes topo {
      0% {
        transform: translate(-50%, -250%);
      }
      100% {
        transform: translateY(-50%, -50%);
      }
    }
  }
`;
