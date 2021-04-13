import { useEffect } from "react";
import { useProdutos } from "../../Providers/ListaProdutos";
import { useUsuario } from "../../Providers/Usuario";

import Product from "../../Components/Cards/Product";

const Store = () => {
  const { produtos } = useProdutos();
  const { loadUser } = useUsuario();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Store</h1>
      <div>
        {produtos &&
          produtos.map((valor, index) => {
            return <Product produto={valor} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Store;
