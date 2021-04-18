import {
  Container,
  Header,
  Box,
  TextInput,
  Input,
  Error,
  ButtonContainer,
} from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../../services/api";

const Modal = () => {
  const token = localStorage.getItem("token");
  const schema = yup.object().shape({
    name: yup.string().required("campo obrigatorio"),
    amount: yup.string().required("campo obrigatorio"),
    category: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("products", data, {
        header: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <Container>
            <Header>Novo Produto</Header>
            <Box>
              <TextInput>Produto:</TextInput>
              <Input {...register("name")} />
              <Error>{errors.name?.message}</Error>
            </Box>
            <Box>
              <TextInput>Quantidade:</TextInput>
              <Input {...register("amount")} />
              <Error>{errors.amount?.message}</Error>
            </Box>
            <Box>
              <TextInput>Categoria:</TextInput>
              <Input {...register("category")} />
              <Error>{errors.category?.message}</Error>
            </Box>

            <ButtonContainer type="submit">Cadastrar</ButtonContainer>
          </Container>
        </div>
      </form>
    </>
  );
};

export default Modal;
