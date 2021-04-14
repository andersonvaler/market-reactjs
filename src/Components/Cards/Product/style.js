import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 9rem;
  background-color: #f6f2f9;
  border-radius: 1rem;
  margin: 0.8rem;
  display: flex;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
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

export const Input = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 16px;
  padding-left: 1.5rem;
  margin: 15px 0;
  color: #380f52;
  border: 1px solid;
  border-color: ${(props) => (props.error ? "red" : "rgba(213, 197, 232, 1)")};
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  min-width: 50vh;
`;
