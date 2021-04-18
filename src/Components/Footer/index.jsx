import { FooterContainer } from "./style";
import { Cart, Person, Receipt, Search } from "../Header/style";
import { useHistory, useParams } from "react-router-dom";

const Footer = () => {
  const params = useParams();
  const history = useHistory();

  return (
    <FooterContainer>
      {params.userType !== "store" &&
      history.location.pathname !== "/pedidos" ? (
        <>
          <button
            className="footer-button"
            onClick={() => history.push("/cart")}
          >
            <Cart />
            <h4>Carrinho</h4>
          </button>
          <button
            className="footer-button"
            onClick={() => history.push("/products")}
          >
            <Search />
            <h4>Buscar</h4>
          </button>
          <button
            className="footer-button"
            onClick={() => history.push("/profile/user")}
          >
            <Person />
            <h4>Perfil</h4>
          </button>
        </>
      ) : (
        <>
          <button
            className="footer-button"
            onClick={() => history.push("/pedidos")}
          >
            <Receipt />
            <h4>Pedidos</h4>
          </button>

          <button
            className="footer-button"
            onClick={() => history.push("/profile/store")}
          >
            <Person />
            <h4>Perfil</h4>
          </button>
        </>
      )}
    </FooterContainer>
  );
};

export default Footer;
