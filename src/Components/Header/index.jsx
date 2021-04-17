import {
  Cart,
  HeaderContainer,
  Person,
  Search,
  PersonAvatar,
  Receipt,
} from "./style";
import CompactLogo from "../Logo/CompactLogo";
import { useHistory, useParams } from "react-router-dom";
import { useToken } from "../../Providers/Token";
import { useCarrinho } from "../../Providers/Carrinho";
import Badge from "@material-ui/core/Badge";

const Header = () => {
  const { carrinho } = useCarrinho();
  const params = useParams();
  const history = useHistory();
  const { clearToken } = useToken();

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
            onClick={() => {
              clearToken();
              history.push("/");
            }}
          >
            <PersonAvatar>D</PersonAvatar>
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
            onClick={() => history.push("/products")}
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
            onClick={() => {
              clearToken();
              history.push("/");
            }}
          >
            <PersonAvatar>D</PersonAvatar>
          </button>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
