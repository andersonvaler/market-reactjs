import api from "../../services/api";
import { useToken } from "../Token";
import { useUsuario } from "../Usuario";

const { createContext, useContext, useState, useEffect } = require("react");

const PedidosContext = createContext();

export const PedidosProvider = ({ children }) => {
  const [pedidos, setPedidos] = useState(false);
  const { isStore } = useUsuario();
  const { token } = useToken();
  const [atualizer, setAtualizer] = useState(false);

  const atualizeOrder = () => {
    setTimeout(() => setAtualizer(!atualizer), 10000);
  };

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
          atualizeOrder();
        })
        .catch((error) => {
          console.log(error);
        });
    //eslint-disable-next-line
  }, [token, isStore, atualizer]);

  return (
    <PedidosContext.Provider value={{ pedidos, setPedidos }}>
      {children}
    </PedidosContext.Provider>
  );
};

export const usePedidos = () => useContext(PedidosContext);
