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
import { useState, useEffect } from "react";
import { useNotifications } from "../../Providers/Notifications";
import api from "../../services/api";
import { useGlobal } from "../../Providers/Global";
import { usePedidos } from "../../Providers/Pedidos";
import { usePedidosRecebidos } from "../../Providers/PedidosRecebidos";

const Header = () => {
  const { carrinho } = useCarrinho();
  const { userType } = useParams();
  const { pedidos } = usePedidos();
  const history = useHistory();
  const { clearToken, token } = useToken();
  const { setIsStore, setUsuario, usuario, isStore } = useUsuario();
  const [showDropdown, setShowDropdown] = useState();
  const { notifications } = useNotifications();
  const { global, setGlobal } = useGlobal();
  const { pedidosRecebidos } = usePedidosRecebidos();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    userType === "store" &&
      isStore &&
      setOrder([
        ...pedidos.filter((pedido) => pedido.available),
        ...pedidosRecebidos.filter(
          (pedido) => pedido?.isOrder && pedido?.store.storeId === usuario.id
        ),
      ]);
  }, [pedidosRecebidos, usuario, pedidos, userType, isStore]);

  const handleDeleteNotification = (id) => {
    history.push("/checkout");
    api.delete(`notifications/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setGlobal(!global);
  };

  return (
    <HeaderContainer>
      {userType !== "store" && history.location.pathname !== "/pedidos" ? (
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
            onMouseOver={() => setShowDropdown(true)}
            onClick={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Badge
              badgeContent={notifications?.length}
              style={{ color: "#fff" }}
              overlap="circle"
              color="primary"
            >
              <PersonAvatar>{usuario?.name[0].toUpperCase()}</PersonAvatar>
            </Badge>
            <DropdownContainer showDropdown={showDropdown}>
              <DropdownNotificationContainer>
                <h3>Avisos</h3>
                {!!notifications[0] ? (
                  notifications.map((notification, index) => (
                    <DropdownListItem
                      key={index}
                      onClick={() => handleDeleteNotification(notification.id)}
                    >
                      {notification.name}
                    </DropdownListItem>
                  ))
                ) : (
                  <DropdownListItem
                    onClick={() => history.push("/checkout")}
                    noOrder
                  >
                    Nenhum aviso
                  </DropdownListItem>
                )}
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
            onMouseOver={() => setShowDropdown(true)}
          >
            <Badge
              badgeContent={order.length}
              style={{ color: "#fff" }}
              overlap="circle"
              color="primary"
            >
              <PersonAvatar>
                <Store />
              </PersonAvatar>
            </Badge>
            <DropdownContainer showDropdown={showDropdown}>
              <DropdownNotificationContainer>
                <h3>Avisos</h3>
                {!!order[0] ? (
                  order.map((pedido, index) => (
                    <DropdownListItem
                      key={index}
                      onClick={() => history.push("/pedidos")}
                    >
                      {pedido.isOrder
                        ? "Pedido confirmado"
                        : pedido.available && "Novo or??amento"}
                    </DropdownListItem>
                  ))
                ) : (
                  <DropdownListItem>
                    Nenhum pedido ou or??amento
                  </DropdownListItem>
                )}
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
