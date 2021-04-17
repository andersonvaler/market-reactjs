import { Input, Container } from "./style";
import { Button } from "../style";
import api from "../../../services/api";
import { useState } from "react";
import { useToken } from "../../../Providers/Token";

export const ModalEdit = ({ propriedade, usuario }) => {
  const [texto, setTexto] = useState("");
  const { token } = useToken();
  const editar = () => {
    if (propriedade === "name") {
      api
        .patch(
          `users/${usuario.id}`,
          { name: texto },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (propriedade === "email") {
      api
        .patch(
          `users/${usuario.id}`,
          { email: texto },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (propriedade === "number") {
      api
        .patch(
          `users/${usuario.id}`,
          { number: texto },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (propriedade === "adress") {
      api
        .patch(
          `users/${usuario.id}`,
          { adress: texto },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (propriedade === "cnpj") {
      api
        .patch(
          `users/${usuario.id}`,
          { cnpj: texto },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Container>
      <h1>
        Editar
        {propriedade === "name" && " nome"}
        {propriedade === "email" && " email"}
        {propriedade === "number" && " telefone"}
        {propriedade === "adress" && " Endereço"}
        {propriedade === "cnpj" && " cnpj"}
      </h1>
      <Input
        onChange={(e) => {
          setTexto(e.target.value);
        }}
      ></Input>
      <Button onClick={() => editar(propriedade)}>Editar</Button>
    </Container>
  );
};
export default ModalEdit;
