import api from "../../services/api";
import { useToken } from "../Token";
import { useUsuario } from "../Usuario";

const { createContext, useContext, useState, useEffect } = require("react");

const PedidosContext = createContext();

export const PedidosProvider = ({ children }) => {
  const [pedidos, setPedidos] = useState(false);
  const { isStore } = useUsuario();
  const { token } = useToken();

  useEffect(() => {
    token &&
      isStore &&
      api
        .get("order", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setPedidos(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [token, isStore]);

  return (
    <PedidosContext.Provider value={{ pedidos, setPedidos }}>
      {children}
    </PedidosContext.Provider>
  );
};

export const usePedidos = () => useContext(PedidosContext);
