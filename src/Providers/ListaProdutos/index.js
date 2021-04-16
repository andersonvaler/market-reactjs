import api from "../../services/api";
import { useToken } from "../Token";

const { createContext, useContext, useState, useEffect } = require("react");

const ListaProdutosContext = createContext();

export const ListaProdutosProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);
  const { token } = useToken();

  useEffect(() => {
    api
      .get("products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return (
    <ListaProdutosContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ListaProdutosContext.Provider>
  );
};

export const useProdutos = () => useContext(ListaProdutosContext);
