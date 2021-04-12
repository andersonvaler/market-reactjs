import { useParams } from "react-router-dom";
import FormLogin from "../../Components/FormLogin";
import FullLogo from "../../Components/Logo/FullLogo";

const Login = () => {
  const params = useParams();

  return (
    <div>
      <FullLogo />
      <h1> Login - {params.userType} </h1>
      <FormLogin />
    </div>
  );
};

export default Login;
