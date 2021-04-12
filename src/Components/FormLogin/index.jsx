import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { useToken } from "../../Providers/Token";

import api from "../../services/api";

import { Container, Header, Box, TextInput, Input } from "./style";
import PrimaryButton from "../Button/PrimaryButton";

const FormLogin = () => {
  const { getToken } = useToken();

  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email Invalido"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    api
      .post("login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        getToken();
        // reset();
      })
      .catch((error) => {
        console.log(error);
        reset();
      });
  };

  return (
    <div>
      <h1>Form User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Container>
            <Header>Login</Header>
            <Box>
              <TextInput>Email:</TextInput>
              <Input {...register("email")} />
              <p>{errors.email?.message}</p>
            </Box>
            <Box>
              <TextInput>Senha:</TextInput>
              <Input {...register("password")} />
              <p>{errors.password?.message}</p>
            </Box>
            <PrimaryButton type="submit">Fazer Login</PrimaryButton>
          </Container>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
