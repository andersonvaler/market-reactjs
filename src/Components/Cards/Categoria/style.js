import styled from "styled-components";
import { Button } from "../../Button/PrimaryButton/style";

export const CategoriaContainer = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: space-around;
  width: 45vw;
  min-width: 260px;
  max-width: 400px;
  border: solid 1px #d5c5e8;
  height: 100%;
  margin: 8px;
  margin-left: 0px;

  @media (min-width: 768px) {
    width: 90vw;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 8px;
    margin: 8px 16px;
    min-width: 20vw;
    max-width: 200px;
    height: 25vh;
  }

  .text-categoria {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 8px;

    @media (min-width: 768px) {
      padding: 0;
      align-items: center;
      justify-content: center;

      h3 {
        margin: 16px 0;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  width: 150px;
  height: 15vh;

  img {
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
  }

  @media (min-width: 768px) {
    width: 100%;
    max-height: 130px;

    img {
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 0;
    }
  }
`;

export const NewButton = styled(Button)`
  font-size: 11px;
  width: 85%;
`;
