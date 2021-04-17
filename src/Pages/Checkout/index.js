import { useEffect } from "react";
import { useProdutos } from "../../Providers/ListaProdutos";
import { useUsuario } from "../../Providers/Usuario";
import { useHistory } from "react-router";

import Product from "../../Components/Cards/Product";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const Checkout = () => {
  const { produtos } = useProdutos();
  const { loadUser } = useUsuario();
  const history = useHistory();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <div>
        {produtos &&
          produtos.map((valor, index) => {
            return <Product produto={valor} key={index} />;
          })}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
