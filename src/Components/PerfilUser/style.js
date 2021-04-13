import styled from "styled-components";
import { MdModeEdit } from "react-icons/md";

export const PerfilContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f2f9;

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
  font-size: 1rem;
  color: #380f52;
`;
