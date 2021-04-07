import { useParams } from "react-router-dom";

const Register = () => {
  const params = useParams();

  return (
    <div>
      <h1> Register - {params.userType} </h1>
    </div>
  );
};

export default Register;
