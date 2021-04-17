import styled from "styled-components";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import Avatar from "@material-ui/core/Avatar";
import ReceiptRoundedIcon from "@material-ui/icons/ReceiptRounded";
import StoreRoundedIcon from "@material-ui/icons/StoreRounded";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #d5c5e8;
  padding-left: 5%;
  padding-right: 5%;
  background-color: #f6f2f9;
  position: fixed;
  top: 0;
  z-index: 1000;

  .header-button-desktop {
    display: none;
    background-color: #f6f2f9;

    h4 {
      color: #380f52;
      font-size: 14px;
    }
  }

  .header-button {
    border: none;
    background-color: #f6f2f9;
    :hover {
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    padding-left: 25%;
    padding-right: 25%;

    .header-button-desktop {
      display: block;
      border: none;
      :hover {
        cursor: pointer;
      }
    }
  }
`;

export const Search = styled(SearchRoundedIcon)`
  color: #380f52;
  margin-bottom: -5px;
`;

export const Cart = styled(ShoppingCartRoundedIcon)`
  color: #380f52;
  margin-bottom: -5px;
`;

export const Person = styled(PersonRoundedIcon)`
  color: #380f52;
  margin-bottom: -5px;
`;

export const PersonAvatar = styled(Avatar)`
  color: #c2f244 !important;
  background-color: #0ec977 !important;
  font-weight: bold !important;
`;

export const Receipt = styled(ReceiptRoundedIcon)`
  color: #380f52;
  margin-bottom: -5px;
`;

export const Store = styled(StoreRoundedIcon)`
  color: #c2f244;
  background-color: #0ec977;
  font-size: 18px;
`;
