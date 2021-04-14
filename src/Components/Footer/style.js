import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: solid 2px #d5c5e8;
  padding-left: 5%;
  padding-right: 5%;
  background-color: #f6f2f9;
  position: relative;
  bottom: 0;
  margin-top: 0.4rem;

  .footer-button {
    border: none;
    :hover {
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
