import { useParams } from "react-router-dom";
import FormLogin from "../../Components/FormLogin";
import FullLogo from "../../Components/Logo/FullLogo";
import { LoginContainer } from "./style";

const Login = () => {
  const params = useParams();

  return (
    <div>
      <FullLogo />
      <LoginContainer>
        <FormLogin />
      </LoginContainer>
    </div>
  );
};

export default Login;
