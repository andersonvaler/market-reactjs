const [createContext, useContext, useState, useEffect] = require("react");

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    //se não tiver token, vai retornar null
    if (token) {
      //usuario logado
    } else {
      //precisa fazer login
    }
  }, [token, setToken]);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const UseToken = useContext(TokenContext);
