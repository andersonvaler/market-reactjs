import { UseCarrinho } from "../Carrinho";
import { UseMercados } from "../ListaMercados";
import { UseProdutos } from "../ListaProdutos";
import { UseToken } from "../Token";
import { UseUsuario } from "../Usuario";

const { createContext, useContext, useState, useEffect } = require("react");

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  /* Aqui serão importados todos os estados do projeto.
    Para sempre os componentes sempre atualizarem quando forem modificados */
  const { carrinho } = UseCarrinho();
  const { mercados } = UseMercados();
  const { produtos } = UseProdutos();
  const { token } = UseToken();
  const { usuario } = UseUsuario();

  const [global, setGlobal] = useState([]);

  useEffect(() => {
    setGlobal([carrinho, mercados, produtos, token, usuario]);
  }, [carrinho, mercados, produtos, token, usuario, setGlobal]);

  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const UseGlobal = () => useContext(GlobalContext);
