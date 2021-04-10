import { useCarrinho } from "../Carrinho";
import { useMercados } from "../ListaMercados";
import { useProdutos } from "../ListaProdutos";
import { useToken } from "../Token";
import { useUsuario } from "../Usuario";
import { UseValorSelecionado } from "../ValorSelecionado";

const { createContext, useContext, useState, useEffect } = require("react");

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  /* Aqui serão importados todos os estados do projeto.
    Para sempre os componentes sempre atualizarem quando forem modificados */
  const { carrinho } = useCarrinho();
  const { mercados } = useMercados();
  const { produtos } = useProdutos();
  const { token } = useToken();
  const { usuario } = useUsuario();
  const { valorSelecionado } = UseValorSelecionado();

  const [global, setGlobal] = useState([]);

  useEffect(() => {
    setGlobal([carrinho, mercados, produtos, token, usuario, valorSelecionado]);
  }, [
    carrinho,
    mercados,
    produtos,
    token,
    usuario,
    valorSelecionado,
    setGlobal,
  ]);

  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
