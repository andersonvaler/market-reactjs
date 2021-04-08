import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useToken } from "../../Providers/Token";

import api from "../../services/api";

const FormLogin = () => {
  const history = useHistory();
  const { setToken } = useToken();

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
    console.log(data);
    api
      .get("users")
      .then((response) => {
        console.log(response);
        // setToken(JSON.stringify(response.data.access));
        // reset();
        // history.push("/home");
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
        <label>
          <p>Email:</p>
          <input {...register("email")} />
          <p>{errors.email?.message}</p>
        </label>

        <label>
          <p>Senha:</p>
          <input {...register("password")} />
          <p>{errors.password?.message}</p>
        </label>

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormLogin;
