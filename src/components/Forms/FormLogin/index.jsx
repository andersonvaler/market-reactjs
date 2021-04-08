import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

// import axios from "axios";

const FormLogin = () => {
  // const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email Invalido"),
    senha: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // axios
    //   .post("url", data)
    //   .then((response) => {
    //     token = JSON.stringify(response.data.access);
    //     reset();
    //     history.push("/home");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     reset();
    //   });
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
          <input {...register("senha")} />
          <p>{errors.senha?.message}</p>
        </label>

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormLogin;
