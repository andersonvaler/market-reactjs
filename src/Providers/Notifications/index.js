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
        })
        .catch((error) => {
          console.log(error);
        });
  }, [token, userId, global]);

  return (
    <NotificationsContext.Provider value={{ notifications, setNotifications }}>
      {children}
      {console.log(notifications)}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationsContext);
