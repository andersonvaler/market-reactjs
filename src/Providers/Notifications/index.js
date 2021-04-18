import api from "../../services/api";
import { useGlobal } from "../Global";
import { useToken } from "../Token";
import { useUsuario } from "../Usuario";

const { createContext, useContext, useState, useEffect } = require("react");

const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const { token } = useToken();
  const { userId } = useUsuario();
  const { global } = useGlobal();
  const [atualizer, setAtualizer] = useState(false);

  const atualizeOrder = () => {
    setTimeout(() => setAtualizer(!atualizer), 10000);
  };

  useEffect(() => {
    token &&
      api
        .get(`notifications/?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setNotifications(response.data);
          atualizeOrder();
        })
        .catch((error) => {
          console.log(error);
        });
    //eslint-disable-next-line
  }, [token, userId, global, atualizer]);

  return (
    <NotificationsContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationsContext);
