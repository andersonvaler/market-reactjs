import api from "../../services/api";
import { useToken } from "../Token";

const { createContext, useContext, useState, useEffect } = require("react");

const ListaMercadosContext = createContext();

export const ListaMercadosProvider = ({ children }) => {
  const [mercados, setMercados] = useState();
  const { token } = useToken();

  useEffect(() => {
    api
      .get("users/?isStore=true", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMercados(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return (
    <ListaMercadosContext.Provider value={{ mercados, setMercados }}>
      {children}
    </ListaMercadosContext.Provider>
  );
};

export const useMercados = () => useContext(ListaMercadosContext);
