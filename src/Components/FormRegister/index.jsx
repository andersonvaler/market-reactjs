import {
  Container,
  Header,
  Box,
  TextInput,
  Input,
  RegisterFormContainer,
  RegisterButton,
} from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";
import { useHistory } from "react-router";

const FormRegister = ({ userType, notifyError, notifyRegister }) => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("Email Invalido"),
    adress: yup.string().required("Campo Obrigatório"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password"), null], "senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const redirect = () => {
    userType === "user"
      ? history.push("/login/user")
      : history.push("/login/store");
  };

  const handleForm = (data) => {
    const isStore = userType === "store";
    api
      .post("register", { ...data, isStore: isStore })
      .then((res) => {
        reset();
        redirect();
        notifyRegister();
      })
      .catch((error) => {
        console.log(error);
        notifyError();
      });
  };

  return (
    <RegisterFormContainer>
      <form onSubmit={handleSubmit(handleForm)}>
        <Container>
          <Header>Cadastro</Header>
          <Box>
            <TextInput error={!!errors.name}>Nome:</TextInput>
            <Input
              {...register("name")}
              error={!!errors.name}
              data-testid="input/name"
            />
            <p>{errors.name?.message}</p>
          </Box>
          <Box>
            <TextInput error={!!errors.email}>Email:</TextInput>
            <Input
              {...register("email")}
              error={!!errors.email}
              data-testid="input/email"
            />
            <p>{errors.email?.message}</p>
          </Box>
          <Box>
            <TextInput error={!!errors.adress}>Endereço:</TextInput>
            <Input
              {...register("adress")}
              error={!!errors.adress}
              data-testid="input/adress"
            />
            <p>{errors.adress?.message}</p>
          </Box>
          <Box>
            <TextInput error={!!errors.password}>Senha:</TextInput>
            <Input
              {...register("password")}
              error={!!errors.password}
              type="password"
              data-testid="input/password"
            />
            <p>{errors.password?.message}</p>
          </Box>
          <Box>
            <TextInput error={!!errors.confirmPassword}>
              Confirmar senha:
            </TextInput>
            <Input
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              type="password"
              data-testid="input/confirmPassword"
            />
            <p>{errors.confirmPassword?.message}</p>
          </Box>
          <h5>
            Já possui uma conta? &nbsp;
            <span onClick={redirect}>Faça o login</span>
          </h5>
          <RegisterButton type="submit">Cadastrar</RegisterButton>
        </Container>
      </form>
    </RegisterFormContainer>
  );
};

export default FormRegister;
