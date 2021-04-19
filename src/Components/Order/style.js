import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .titleTable {
    font-weight: 600;
    font-size: 1.3rem;
    color: #fff;
    background-color: #0ec977;
  }

  td {
    padding: 0.5rem;
    background-color: #00000010;
    button {
      background-color: #0ec977;
      padding: 0.5rem;
      color: #fff;
      font-weight: 800;
      cursor: pointer;
      border-radius: 6px;
    }
  }

  table {
    width: 100%;
  }

  .name {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0ec977;
    text-transform: uppercase;
  }

  .adress {
    font-weight: 600;
    font-size: 1.1rem;
    color: #380f52;
  }
`;

export const SemPedido = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: #927dad;
    font-weight: 600;
    text-align: center;
  }
`;
