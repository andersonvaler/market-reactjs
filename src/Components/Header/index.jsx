import {
  Cart,
  HeaderContainer,
  Person,
  Search,
  PersonAvatar,
  Receipt,
  Store,
  DropdownContainer,
  DropdownButton,
  DropdownNotificationContainer,
  DropdownListItem,
} from "./style";
import CompactLogo from "../Logo/CompactLogo";
import { useHistory, useParams } from "react-router-dom";
import { useToken } from "../../Providers/Token";
import { useCarrinho } from "../../Providers/Carrinho";
import Badge from "@material-ui/core/Badge";
import { useUsuario } from "../../Providers/Usuario";
import { useState } from "react";

const Header = () => {
  const { carrinho } = useCarrinho();
  const params = useParams();
  const history = useHistory();
  const { clearToken } = useToken();
  const { setIsStore, setUsuario, usuario } = useUsuario();
  const [showDropdown, setShowDropdown] = useState();
  const notifications = [
    {
      name: "você recebeu um orçamento",
    },
    {
      name: "você recebeu um orçamento",
    },
    {
      name: "você recebeu um orçamento",
    },
    {
      name: "você recebeu um orçamento",
    },
  ];

  return (
    <HeaderContainer>
      {params.userType !== "store" ? (
        <>
          <button
            className="header-button"
            onClick={() => history.push("/dashboard/user")}
          >
            <CompactLogo />
          </button>
          <>
            <button
              className="header-button-desktop"
              onClick={() => history.push("/cart")}
            >
              <Badge
                badgeContent={carrinho.length}
                style={{ color: "#fff" }}
                color="primary"
              >
                <Cart />
              </Badge>

              <h4>Carrinho</h4>
            </button>

            <button
              className="header-button-desktop"
              onClick={() => history.push("/products")}
            >
              <Search />
              <h4>Buscar</h4>
            </button>

            <button
              className="header-button-desktop"
              onClick={() => history.push("/profile/user")}
            >
              <Person />
              <h4>Perfil</h4>
            </button>
          </>
          <button
            className="header-button"
            onClick={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <PersonAvatar>{usuario?.name[0].toUpperCase()}</PersonAvatar>
            <DropdownContainer showDropdown={showDropdown}>
              <DropdownNotificationContainer>
                <h3>Avisos</h3>
                {notifications.map((message, index) => (
                  <DropdownListItem key={index}>
                    {message.name}
                  </DropdownListItem>
                ))}
              </DropdownNotificationContainer>
              <DropdownButton
                onClick={() => {
                  clearToken();
                  history.push("/");
                  setUsuario();
                  setIsStore();
                }}
              >
                Sair
              </DropdownButton>
            </DropdownContainer>
          </button>
        </>
      ) : (
        <>
          <button
            className="header-button"
            onClick={() => history.push("/dashboard/store")}
          >
            <CompactLogo />
          </button>
          <button
            className="header-button-desktop"
            onClick={() => history.push("/pedidos")}
          >
            <Receipt />
            <h4>Pedidos</h4>
          </button>
          <button
            className="header-button-desktop"
            onClick={() => history.push("/profile/store")}
          >
            <Person />
            <h4>Perfil</h4>
          </button>
          <button
            className="header-button"
            onClick={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <PersonAvatar>
              <Store />
            </PersonAvatar>
            <DropdownContainer showDropdown={showDropdown}>
              <DropdownNotificationContainer>
                <h3>Avisos</h3>
                {notifications.map((message, index) => (
                  <DropdownListItem key={index}>
                    {message.name}
                  </DropdownListItem>
                ))}
              </DropdownNotificationContainer>
              <DropdownButton
                onClick={() => {
                  clearToken();
                  history.push("/");
                  setUsuario();
                  setIsStore();
                }}
              >
                Sair
              </DropdownButton>
            </DropdownContainer>
          </button>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
