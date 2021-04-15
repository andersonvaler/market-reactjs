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

const FormLogin = ({ userType }) => {
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
    userType === "user"
      ? history.push("/dashboard/user")
      : history.push("/dashboard/store");
  };

  const onSubmit = (data) => {
    const isStore = userType === "user";
    api
      .post("login", { ...data, isStore: isStore })
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        getToken();
        reset();
        redirectToDashboard();
      })
      .catch((error) => {
        console.log(error);
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
