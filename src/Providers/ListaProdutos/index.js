import api from "../../services/api";
import { useToken } from "../Token";

const { createContext, useContext, useState, useEffect } = require("react");

const ListaProdutosContext = createContext();

export const ListaProdutosProvider = ({ children }) => {
  const { token } = useToken();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api
      .get("products", {
        headers: { Authorization: `Bearer ${token}` },
      })
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
