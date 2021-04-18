import styled from "styled-components";

export const Container = styled.div`
  width: 14rem;
  height: 16rem;
  background-color: #f6f2f9;
  border-radius: 1rem;
  margin: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
`;

export const Image = styled.figure`
  width: 100%;
  height: 9rem;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;
  img {
    width: 100%;
  }
`;

export const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
  padding: 0.5rem;
  h3 {
    padding: 0.5rem;
    color: #927dad;
  }
`;

export const Name = styled.h2`
  font-weight: 700;
  margin: 0;
  color: #380f52;
  font-size: 1rem;
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const MarketName = styled.h2`
  font-size: 1.2rem;
  color: #380f52;
  font-weight: 600;
  margin-bottom: 0.5rem;
  /* border-bottom: 1px dotted #00000060; */
`;

export const MarketAdress = styled.p`
  font-size: 1rem;
  color: #380f5295;
  font-weight: 400;
`;
