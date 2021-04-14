import { useToken } from "../Token";

import jwt_decode from "jwt-decode";
import api from "../../services/api";

const { createContext, useContext, useState } = require("react");

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const { token } = useToken();
  const [usuario, setUsuario] = useState();

  const loadUser = () => {
    const user_id = jwt_decode(token);
    api
      .get(`users/${user_id.sub}`)
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line
  };

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario, loadUser }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(UsuarioContext);
