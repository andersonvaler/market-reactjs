import styled from "styled-components";

export const Container = styled.div`
  width: 14rem;
  height: 16rem;
  background-color: #f6f2f9;
  border-radius: 1rem;
  margin: 0.8rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.1rem 0.6rem 0.01rem #00000095;
`;

export const Image = styled.figure`
  width: 100%;
  height: 65%;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;
`;

export const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 35%;
  padding: 0.5rem;
`;

export const Name = styled.h3`
  font-weight: bold;
  margin: 0;
  color: #380f52;
  font-size: 1rem;
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
