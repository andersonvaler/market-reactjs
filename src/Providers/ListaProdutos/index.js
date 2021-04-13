import axios from "axios";

const { createContext, useContext, useState, useEffect } = require("react");

const ListaProdutosContext = createContext();

export const ListaProdutosProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get("https://capstone-grupo-dois.herokuapp.com/products")
      .then((response) => setProdutos(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ListaProdutosContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ListaProdutosContext.Provider>
  );
};

export const useProdutos = () => useContext(ListaProdutosContext);
