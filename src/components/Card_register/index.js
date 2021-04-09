import { Button } from "../Button/PrimaryButton/style";
import {
  Container,
  Header,
  Box,
  TextInput,
  Input,
  BoxLogin,
  Link,
} from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

export const Register = () => {
  const schema = yup.object().shape({
    username: yup
      .string("invalid")
      .matches(/^[aA-zZ]+$/, "invalid")
      .required("required"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const handleForm = (data) => {
    api
      .post("users/", data)
      .then(() => {
        console.log("ok");
      })
      .catch((e) => e.messages);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <Container>
            <Header>Cadastro</Header>
            <Box>
              <TextInput>Nome:</TextInput>
              <Input />
            </Box>
            <Box>
              <TextInput>Email:</TextInput>
              <Input />
            </Box>
            <Box>
              <TextInput>Endereço:</TextInput>
              <Input />
            </Box>
            <Box>
              <TextInput>Senha:</TextInput>
              <Input />
            </Box>
            <Box>
              <TextInput>Confirmar senha:</TextInput>
              <Input />
            </Box>
            <BoxLogin>
              ja possui uma conta?
              <Link href="http://localhost:3000/"> faça o login</Link>
            </BoxLogin>
            <button type="submit">Cadastrar</button>
          </Container>
        </div>
      </form>
    </>
  );
};
export default Register;
