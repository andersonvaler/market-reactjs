import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28rem;
  height: 2.2rem;
  background-color: #f6f2f9;
  border-radius: 24px;
  box-shadow: 0 0.03rem 0.2rem 0.01rem #00000095;
  margin: 0.5rem;
  input {
    color: #927dad;
    width: 85%;
    height: 100%;
    font-weight: 600;
    font-size: 1rem;
    background-color: transparent;
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
