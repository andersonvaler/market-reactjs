import api from "../../services/api";
import { useToken } from "../Token";
import { useUsuario } from "../Usuario";

const { createContext, useContext, useState, useEffect } = require("react");

const PedidosRecebidosContext = createContext();

export const PedidosRecebidosProvider = ({ children }) => {
  const [pedidosRecebidos, setPedidosRecebidos] = useState(false);
  const { isStore, usuario } = useUsuario();
  const { token } = useToken();
  const [atualizer, setAtualizer] = useState(false);

  const atualizeOrder = () => {
    setTimeout(() => setAtualizer(!atualizer), 10000);
  };

  useEffect(() => {
    token &&
      !isStore &&
      api
        .get(`cart?userId=${usuario && usuario.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setPedidosRecebidos(response.data);
          atualizeOrder();
        })
        .catch((error) => {
          console.log(error);
        });

    token &&
      isStore &&
      api
        .get(`cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setPedidosRecebidos(response.data);
          atualizeOrder();
        })
        .catch((error) => {
          console.log(error);
        });
    //eslint-disable-next-line
  }, [token, isStore, atualizer]);

  return (
    <PedidosRecebidosContext.Provider
      value={{ pedidosRecebidos, setPedidosRecebidos }}
    >
      {children}
    </PedidosRecebidosContext.Provider>
  );
};

export const usePedidosRecebidos = () => useContext(PedidosRecebidosContext);
