import { useEffect } from "react";
import { useHistory } from "react-router";
import { useCarrinho } from "../../Providers/Carrinho";

import ProdutoCarrinho from "../../Components/Cards/ProdutoCarrinho";
import { useGlobal } from "../../Providers/Global";

const Cart = () => {
  const history = useHistory();
  const { carrinho, setCarrinho } = useCarrinho();
  const { global } = useGlobal();

  useEffect(() => {}, [global]);

  return (
    <div>
      <button onClick={() => history.push("/store")}>Ir para Store</button>
      <h1>Cart</h1>
      {carrinho &&
        carrinho.map((valor, index) => {
          return (
            <ProdutoCarrinho
              valor={valor}
              index={index}
              setCarrinho={setCarrinho}
            />
          );
        })}
    </div>
  );
};

export default Cart;
