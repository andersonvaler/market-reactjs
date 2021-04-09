const { createContext, useContext, useState } = require("react");

const ValorSelecionadoContext = createContext();

export const ValorSelecionadoProvider = ({ children }) => {
  const [valorSelecionado, setValorSelecionado] = useState();

  return (
    <ValorSelecionadoContext.Provider
      value={{ valorSelecionado, setValorSelecionado }}
    >
      {children}
    </ValorSelecionadoContext.Provider>
  );
};

export const UseValorSelecionado = () => useContext(ValorSelecionadoContext);
