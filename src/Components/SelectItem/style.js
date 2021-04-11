import styled from "styled-components";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import PaymentRoundedIcon from "@material-ui/icons/PaymentRounded";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";

export const SelectionListContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const ListItemContainer = styled.div`
  width: 95%;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  margin: 8px;
  padding-left: 4px;
  cursor: pointer;
  overflow: hidden;
  color: ${(props) =>
    props.selected ? "rgba(112, 0, 255, 1)" : "rgba(146, 125, 173, 1)"};
  padding: 4px;
  background-color: ${(props) =>
    props.selected ? "rgba(229,208,255,1)" : "rgba(246, 242, 249, 1)"};
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
`;

export const CheckIcon = styled(CheckRoundedIcon)`
  color: rgba(112, 0, 255, 1);
  margin: 4px;
`;

export const PayIcon = styled(PaymentRoundedIcon)`
  color: ${(props) =>
    props.selected ? "rgba(112, 0, 255, 1)" : "rgba(146, 125, 173, 1)"};
  margin: 4px;
`;

export const MoneyIcon = styled(AttachMoneyRoundedIcon)`
  color: ${(props) =>
    props.selected ? "rgba(112, 0, 255, 1)" : "rgba(146, 125, 173, 1)"};
  margin: 4px;
`;
