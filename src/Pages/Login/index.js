import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import FormLogin from "../../components/FormLogin";

const Login = () => {
  const params = useParams();
  const history = useHistory();

  const [selectForm, setSelectForm] = useState(true);

  useEffect(() => {
    if (params.userType === "user") {
      setSelectForm(true);
    } else {
      setSelectForm(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1> Login - {params.userType} </h1>
      <FormLogin />
    </div>
  );
};

export default Login;
