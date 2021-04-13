import {
  Container,
  Header,
  Box,
  TextInput,
  Input,
  BoxLogin,
  Link,
  Error,
  ButtonContainer,
} from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";

export const RegisterUser = () => {
  const schema = yup.object().shape({
    name: yup.string().required("campo obrigatorio"),
    email: yup.string().required("Campo Obrigatório").email("Email Invalido"),
    adress: yup.string().required("campo obrigatorio"),
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

  const handleForm = (data) => {
    api
      .post("users", data)
      .then(() => {
        console.log("ok");
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)} style={{ zIndex: "1000" }}>
        <div>
          <Container>
            <Header>Cadastro</Header>
            <Box>
              <TextInput>Nome:</TextInput>
              <Input {...register("name")} />
              <Error>{errors.name?.message}</Error>
            </Box>
            <Box>
              <TextInput>Email:</TextInput>
              <Input {...register("email")} />
              <Error>{errors.email?.message}</Error>
            </Box>
            <Box>
              <TextInput>Endereço:</TextInput>
              <Input {...register("adress")} />
              <Error>{errors.adress?.message}</Error>
            </Box>
            <Box>
              <TextInput>Senha:</TextInput>
              <Input {...register("password")} />
              <Error>{errors.password?.message}</Error>
            </Box>
            <Box>
              <TextInput>Confirmar senha:</TextInput>
              <Input {...register("confirmPassword")} />
              <Error>{errors.confirmPassword?.message}</Error>
            </Box>
            <BoxLogin>
              ja possui uma conta?
              <Link href="http://localhost:3000/"> faça o login</Link>
            </BoxLogin>
            <ButtonContainer type="submit">Cadastrar</ButtonContainer>
          </Container>
        </div>
      </form>
    </>
  );
};
export default RegisterUser;
