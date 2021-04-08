const [createContext, useContext, useState] = require("react");

const ListaProdutosContext = createContext();

export const ListaProdutosProvider = ({ children }) => {
  const [produtos, setProdutos] = useState();

  return (
    <ListaProdutosContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ListaProdutosContext.Provider>
  );
};

export const UseProdutos = useContext(ListaProdutosContext);
