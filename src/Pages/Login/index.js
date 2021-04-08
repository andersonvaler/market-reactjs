import { useParams } from "react-router-dom";
import FormLogin from "../../components/FormLogin";

const Login = () => {
  const params = useParams();

  return (
    <div>
      <h1> Login - {params.userType} </h1>
      <FormLogin />
    </div>
  );
};

export default Login;
