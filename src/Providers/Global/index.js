const { createContext, useContext, useState } = require("react");

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  /* Aqui serão importados todos os estados do projeto.
    Para sempre os componentes sempre atualizarem quando forem modificados */

  const [global, setGlobal] = useState(false);

  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
