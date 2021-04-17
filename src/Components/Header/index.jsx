import {
  Cart,
  HeaderContainer,
  Person,
  Search,
  PersonAvatar,
  Receipt,
  Store,
} from "./style";
import CompactLogo from "../Logo/CompactLogo";
import { useHistory, useParams } from "react-router-dom";
import { useToken } from "../../Providers/Token";
import { useUsuario } from "../../Providers/Usuario";

const Header = () => {
  const params = useParams();
  const history = useHistory();
  const { clearToken } = useToken();
  const { setIsStore, setUsuario, usuario } = useUsuario();

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
              <Cart />
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
              setUsuario();
              setIsStore();
            }}
          >
            <PersonAvatar>{usuario?.name[0].toUpperCase()}</PersonAvatar>
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
            onClick={() => {
              clearToken();
              history.push("/");
            }}
          >
            <PersonAvatar>
              <Store />
            </PersonAvatar>
          </button>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
