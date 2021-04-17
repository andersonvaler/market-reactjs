import styled from "styled-components";
import { MdModeEdit } from "react-icons/md";

export const PerfilContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f2f9;
  margin-top: 70px;

  .imagePerfil {
    border-radius: 360px;
    margin-top: 100px;
    width: 40vw;
    height: 40vw;
    @media (min-width: 768px) {
      width: 10vw;
      height: 10vw;
      margin-top: 30px;
    }
  }

  .intro {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: flex-end;
    }
  }

  .name {
    width: 90%;
    display: flex;
    justify-content: center;
    @media (min-width: 768px) {
      justify-content: space-between;
    }
  }

  .edit {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .topic {
    width: 90%;
    text-align: left;
    font-size: 1.5rem;
    color: #380f52;
    margin-top: 2rem;
  }
  h4 {
    color: #927dad;
    padding-top: 1rem;
  }
  h2 {
    color: #380f52;
    margin-left: 0.6rem;
  }

  @media (min-width: 768px) {
    width: 60vw;
  }
`;

export const EditIcon = styled(MdModeEdit)`
  font-size: 1.5rem;
  color: #0ec977;
`;

export const Button = styled.button`
  color: #0ec977;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  background-color: #380f52;
  width: 100%;
  margin-top: 2rem;
  max-width: 10rem;
  height: 2.2rem;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.4s;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
`;
