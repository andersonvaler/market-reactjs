import { UseCarrinho } from "../Carrinho";
import { UseMercados } from "../ListaMercados";
import { UseProdutos } from "../ListaProdutos";
import { UseToken } from "../Token";
import { UseUsuário } from "../Usuário";

const { createContext, useContext, useState, useEffect } = require("react");

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  /* Aqui serão importados todos os estados do projeto.
    Para sempre os componentes sempre atualizarem quando forem modificados */
  const { carrinho } = UseCarrinho();
  const { mercados } = UseMercados();
  const { produtos } = UseProdutos();
  const { token } = UseToken();
  const { usuário } = UseUsuário();

  const [global, setGlobal] = useState([]);

  useEffect(() => {
    setGlobal([carrinho, mercados, produtos, token, usuário]);
  }, [carrinho, mercados, produtos, token, usuário, setGlobal]);

  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const UseGlobal = () => useContext(GlobalContext);
