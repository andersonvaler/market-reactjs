import styled from "styled-components";

export const Container = styled.div`
  width: 540px;
  height: 170px;
  background-color: #f6f2f9;
  border-radius: 16px;
  margin: 10px 10px;
  display: flex;
`;

export const ProductInfo = styled.div`
  width: 65%;
  height: 100%;
  padding: 10px 15px;
`;

export const ProductImg = styled.figure`
  width: 35%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border-radius: 0 16px 16px 0;
`;

export const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 5px;
`;

export const ProductName = styled.h3`
  font-family: Nunito, sans-serif;
  font-weight: 600;
  margin: 0;
  color: #380f52;
  font-size: 1.2rem;
`;

export const Description = styled.p`
  font-family: Nunito, sans-serif;
  font-weight: 400;
  color: #927dad;
  font-size: 1rem;
  margin: 0;
  padding: 12px 0;
`;
