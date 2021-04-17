import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { useToken } from "../../Providers/Token";

import api from "../../services/api";

import {
  Container,
  Header,
  Box,
  TextInput,
  Input,
  LoginButton,
  LoginFormContainer,
} from "./style";
import { useHistory } from "react-router";

const FormLogin = ({ userType, notifyError, notifyLogin, notifyLoginArea }) => {
  const { getToken } = useToken();
  const history = useHistory();

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

  const redirectToDashboard = () => {
    userType === "store"
      ? history.push("/dashboard/store")
      : history.push("/dashboard/user");
  };

  const onSubmit = (data) => {
    api
      .post("login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        redirectToDashboard();
        getToken();
        reset();
      })
      .catch((error) => {
        console.log(error);
        notifyError();
      });
  };

  const redirectToRegister = () => {
    userType === "user"
      ? history.push("/register/user")
      : history.push("/register/store");
  };

  return (
    <LoginFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Header>Login</Header>
          <Box>
            <TextInput error={!!errors.email}>Email:</TextInput>
            <Input {...register("email")} error={!!errors.email} />
            <p>{errors.email?.message}</p>
          </Box>
          <Box>
            <TextInput error={!!errors.password}>Senha:</TextInput>
            <Input
              {...register("password")}
              type="password"
              error={!!errors.password}
            />
            <p>{errors.password?.message}</p>
          </Box>
          <h5>
            Não tem conta?&nbsp;
            <span onClick={redirectToRegister}>Cadastre-se</span>
          </h5>
          <LoginButton type="submit">Entrar</LoginButton>
        </Container>
      </form>
    </LoginFormContainer>
  );
};

export default FormLogin;
