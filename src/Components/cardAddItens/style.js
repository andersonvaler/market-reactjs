import styled from "styled-components";
import { Button } from "../../Components/Button/PrimaryButton/style";

export const Container = styled.div`
  width: 200px;
  height: 269px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f6f2f9;
  border: 1px solid #d5c5e8;
  border-radius: 16px;
`;

export const StyledImage = styled.img`
  width: 200px;
  height: 135px;
  left: 0px;
  top: 0px;
  border-radius: 16px 16px 0px 0px;
`;

export const Texto = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #380f52;
  width: 184px;
  height: 90px;

  padding-top: 15px;
`;

export const ButtonAdd = styled(Button)`
  width: 95%;
`;
