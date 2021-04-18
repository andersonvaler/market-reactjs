import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  max-width: 80vw;
  height: 40px;
  background-color: #f6f2f9;
  border-radius: 24px;
  box-shadow: 0 0.03rem 0.2rem 0.01rem #00000095;
  margin: 6px auto;

  input {
    color: #927dad;
    width: 85%;
    height: 100%;
    font-weight: 600;
    font-size: 1rem;
    background-color: transparent;
  }

  @media (min-width: 768px) {
    margin: 8px 0px 4px 0px;
    max-width: 670px;
  }
`;

export const Icon = styled.figure`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SearchIcon = styled(FaSearch)`
  font-size: "1.2rem";
  color: #380f52;
`;
