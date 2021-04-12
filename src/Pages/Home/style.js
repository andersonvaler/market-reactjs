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
  }
  .cloud2 {
    position: absolute;
    bottom: 10%;
    left: 0;
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
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
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
`;
