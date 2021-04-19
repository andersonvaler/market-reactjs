import { Input, Container } from "./style";
import { Button } from "../style";
import api from "../../../services/api";
import { useState } from "react";
import { useToken } from "../../../Providers/Token";
import { useUsuario } from "../../../Providers/Usuario";

export const ModalEdit = ({ propriedade, setOpen }) => {
  const [texto, setTexto] = useState("");
  const { token } = useToken();
  const { setUsuario, usuario } = useUsuario();

  const editar = () => {
    let objeto = {};
    objeto[propriedade] = texto;
    texto &&
      api
        .patch(`users/${usuario.id}`, objeto, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUsuario(response.data);
          setOpen(false);
        })
        .catch((error) => {
          console.log(error);
        });
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
