import { useEffect } from "react";
import { useProdutos } from "../../Providers/ListaProdutos";
import { useUsuario } from "../../Providers/Usuario";
import { useHistory } from "react-router";

import Product from "../../Components/Cards/Product";
import Footer from "../../Components/Footer";

const Store = () => {
  const { produtos } = useProdutos();
  const { loadUser } = useUsuario();
  const history = useHistory();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <button onClick={() => history.push("/cart")}>Ir para carrinho</button>
      <h1>Store</h1>
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

export default Store;
