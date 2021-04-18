const { createContext, useContext, useState } = require("react");

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || false);

  const getToken = () => {
    setToken(localStorage.getItem("token"));
  };

  const clearToken = () => {
    setToken(false);
    localStorage.clear();
  };

  return (
    <TokenContext.Provider value={{ token, setToken, getToken, clearToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
