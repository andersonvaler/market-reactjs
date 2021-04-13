import styled from "styled-components";

export const FullLogoContainer = styled.div`
  background-color: rgba(194, 242, 68, 1);
  color: rgba(14, 201, 119, 1);
  padding: 2px 8px;
  display: flex;
  align-items: baseline;
  cursor: pointer;
  position: absolute;
  top: 4px;
  left: 4px;

  h5 {
    margin-left: 5px;
  }

  @media (min-height: 600px) {
    top: 16px;
    left: 16px;
  }

  @media (min-width: 768px) and (min-height: 780px) {
    top: 32px;
    left: 50%;
    transform: translate(-50%);
  }
`;
