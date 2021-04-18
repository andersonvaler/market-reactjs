import { useToken } from "../Token";

import jwt_decode from "jwt-decode";
import api from "../../services/api";

const { createContext, useContext, useState, useEffect } = require("react");

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const { token } = useToken();
  const [usuario, setUsuario] = useState();
  const [isStore, setIsStore] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    const user_id = token ? jwt_decode(token) : false;
    token &&
      api
        .get(`users/${user_id.sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setIsStore(response.data.isStore);
          setUsuario(response.data);
          setUserId(user_id.sub);
        })
        .catch((e) => console.log(e));
  }, [token]);

  return (
    <UsuarioContext.Provider
      value={{ usuario, setUsuario, isStore, setIsStore, userId }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(UsuarioContext);
