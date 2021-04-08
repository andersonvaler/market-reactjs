import { useParams } from "react-router-dom";

const Login = () => {
  const params = useParams();

  return (
    <div>
      <h1> Login - {params.userType} </h1>
    </div>
  );
};

export default Login;
