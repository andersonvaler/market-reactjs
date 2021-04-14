import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 2px #d5c5e8;
  padding-left: 5%;
  padding-right: 5%;
  background-color: #f6f2f9;
  position: fixed;
  top: 0;

  .header-button-descktop {
    display: none;
  }

  .header-button {
    border: none;
    :hover {
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    padding-left: 25%;
    padding-right: 25%;

    .header-button-descktop {
      display: block;
      border: none;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
