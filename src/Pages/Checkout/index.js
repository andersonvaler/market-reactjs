import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUsuario } from "../../Providers/Usuario";

const Checkout = () => {
  const { isStore } = useUsuario();
  const history = useHistory();

  useEffect(() => {
    if (isStore) {
      history.push("/dashboard/store");
    }
    //eslint-disable-next-line
  }, [isStore]);

  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
};

export default Checkout;
