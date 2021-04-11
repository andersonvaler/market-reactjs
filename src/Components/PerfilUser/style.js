import styled from "styled-components";
import { MdModeEdit } from "react-icons/md";

export const PerfilContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .imagePerfil {
    border-radius: 360px;
    width: 40vw;
    height: 40vw;
    @media (min-width: 600px) {
      width: 10vw;
      height: 10vw;
    }
  }

  .intro {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 600px) {
      flex-direction: row;
      align-items: flex-end;
    }
  }

  .name {
    width: 90vw;
    display: flex;
    justify-content: center;
    @media (min-width: 600px) {
      justify-content: space-between;
    }
  }

  .edit {
    width: 90vw;
    display: flex;
    justify-content: space-between;
  }

  .topic {
    width: 90vw;
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
`;

export const EditIcon = styled(MdModeEdit)`
  font-size: 1rem;
  color: #380f52;
`;
