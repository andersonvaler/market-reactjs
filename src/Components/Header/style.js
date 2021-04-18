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
  font-size: ${({ profilePage }) => profilePage && "70px"} !important;
  width: ${({ profilePage }) => profilePage && "150px"} !important;
  height: ${({ profilePage }) => profilePage && "150px"} !important;
  cursor: initial;

  &:hover ~ div {
    display: ${({ profilePage }) => !profilePage && "block"} !important;
  }

  @media (min-width: 768px) {
    margin-top: ${({ profilePage }) => profilePage && "50px"} !important;
  }
`;

export const Receipt = styled(ReceiptRoundedIcon)`
  color: #380f52;
  margin-bottom: -5px;
`;

export const Store = styled(StoreRoundedIcon)`
  color: #c2f244;
  background-color: #0ec977;
  font-size: ${({ profilePage }) => (profilePage ? "80px" : "24px")} !important;
`;

export const DropdownContainer = styled.div`
  display: ${(props) => (props.showDropdown ? "block" : "none")};
  position: absolute;
  background-color: #f6f2f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid #d5c5e8;
  z-index: 1;
  padding: 6px 0 0 0;
  transform: translateX(-80%);
  border-radius: 16px;
  cursor: initial;

  &:hover {
    display: block;
  }

  @media (min-width: 768px) {
    transform: translateX(-70%);
  }
`;

export const DropdownButton = styled.button`
  color: #0ec977;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: #f6f2f9;
  border-top: 1px solid #d5c5e8;
  text-align: left;
  padding: 8px 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  &:hover {
    background-color: #e6f2e3;
  }
`;

export const DropdownNotificationContainer = styled.div`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  flex-direction: column;
  text-align: left;

  &:last-child {
    border: none;
  }

  h3 {
    padding: 8px 16px;
    border-bottom: 1px solid #d5c5e8;
  }
`;

export const DropdownListItem = styled.div`
  padding: 2px 16px;
  border-bottom: 1px solid #d5c5e8;
  cursor: pointer;

  &:hover {
    background-color: #e6f2e3;
    content: ${(props) => props.noOrder && "Ir para checkout"};
  }

  @media (min-width: 768px) {
    padding: 8px 16px;
  }
`;
