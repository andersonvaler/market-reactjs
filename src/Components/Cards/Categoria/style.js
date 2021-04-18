import styled from "styled-components";

export const CategoriaContainer = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: space-around;
  width: 90vw;
  border: solid 1px #d5c5e8;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .text-categoria {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 13%;

    @media (min-width: 768px) {
      padding: 0;
      display: block;
    }
  }

  .image-category {
    height: 100px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    width: 50%;

    @media (min-width: 768px) {
      width: 100%;
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
    }
  }
`;
