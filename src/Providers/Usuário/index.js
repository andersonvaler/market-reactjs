const [createContext, useContext, useState] = require("react");

const UsuárioContext = createContext();

export const UsuárioProvider = ({ children }) => {
  const [usuário, setUsuário] = useState();

  return (
    <UsuárioContext.Provider value={{ usuário, setUsuário }}>
      {children}
    </UsuárioContext.Provider>
  );
};

export const UseUsuário = useContext(UsuárioContext);
