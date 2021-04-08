const [createContext, useContext, useState] = require("react");

const ListaMercadosContext = createContext();

export const ListaMercadosProvider = ({ children }) => {
  const [mercados, setMercados] = useState();

  return (
    <ListaMercadosContext.Provider value={{ mercados, setMercados }}>
      {children}
    </ListaMercadosContext.Provider>
  );
};

export const UseMercados = useContext(ListaMercadosContext);
