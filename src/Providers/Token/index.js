const { createContext, useContext, useState } = require("react");

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || false);

  const getToken = () => {
    setToken(localStorage.getItem("token"));
  };

  return (
    <TokenContext.Provider value={{ token, setToken, getToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
