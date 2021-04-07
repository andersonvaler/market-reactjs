import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: 9rem;
  background-color: #f6f2f9;
  border-radius: 1rem;
  margin: 0.8rem;
  display: flex;
  box-shadow: 0 0.1rem 0.6rem 0.01rem #00000095;
`;

export const ProductInfo = styled.div`
  width: 65%;
  height: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductImg = styled.figure`
  width: 35%;
  height: 100%;
  overflow: hidden;
  border-radius: 0 1rem 1rem 0;
`;

export const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 0.32rem;
`;

export const ProductName = styled.h3`
  font-weight: 600;
  margin: 0;
  color: #380f52;
  font-size: 1.2rem;
`;

export const Description = styled.p`
  font-weight: 500;
  color: #927dad;
  font-size: 1rem;
  line-height: 1.2rem;
`;
