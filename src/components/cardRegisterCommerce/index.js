import {
  Header,
  Box,
  TextInput,
  Input,
  BoxLogin,
  Link,
  ButtonContainer,
} from "../cardRegister/style";
import { BiggerContainer } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

export const RegisterCommerce = () => {
  const schema = yup.object().shape({});

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const handleForm = (data) => {
    api
      .post("commerce/", data)
      .then(() => {
        console.log("ok");
      })
      .catch((e) => e.messages);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <BiggerContainer>
            <Header>Cadastro</Header>
            <Box>
              <TextInput>Nome:</TextInput>
              <Input {...register("name")} />
            </Box>
            <Box>
              <TextInput>CNPJ:</TextInput>
              <Input {...register("cnpj")} />
            </Box>
            <Box>
              <TextInput>Endereço:</TextInput>
              <Input {...register("adress")} />
            </Box>
            <Box>
              <TextInput>Email:</TextInput>
              <Input {...register("email")} />
            </Box>
            <Box>
              <TextInput>Senha:</TextInput>
              <Input {...register("password")} />
            </Box>
            <Box>
              <TextInput>Confirmar senha:</TextInput>
              <Input {...register("confirmPassword")} />
            </Box>
            <BoxLogin>
              ja possui uma conta?
              <Link href="http://localhost:3000/"> faça o login</Link>
            </BoxLogin>
            <ButtonContainer type="submit">Cadastrar</ButtonContainer>
          </BiggerContainer>
        </div>
      </form>
    </>
  );
};
export default RegisterCommerce;
