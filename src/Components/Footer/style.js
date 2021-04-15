import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: solid 1px #d5c5e8;
  padding-top: 4px;
  padding-left: 5%;
  padding-right: 5%;
  background-color: #f6f2f9;
  position: fixed;
  bottom: 0;
  margin-top: 0.4rem;

  .footer-button {
    border: none;
    background-color: #f6f2f9;

    h4 {
      color: #380f52;
      font-size: 14px;
    }

    :hover {
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
