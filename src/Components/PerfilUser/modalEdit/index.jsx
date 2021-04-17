import { Input, Container } from "./style";
import { Button } from "../style";
import api from "../../../services/api";
import { useState, useEffect } from "react";
import { useToken } from "../../../Providers/Token";
import { useGlobal } from "../../../Providers/Global";

export const ModalEdit = ({ propriedade, usuario }) => {
  const [texto, setTexto] = useState("");
  const { token } = useToken();
  const { global, setGlobal } = useGlobal();

  const editar = () => {
    let objeto = {};
    objeto[propriedade] = texto;
    api
      .patch(`users/${usuario.id}`, objeto, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
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
