import { useHistory } from "react-router";
import { useCarrinho } from "../../Providers/Carrinho";
// import { useGlobal } from "../../Providers/Global";

import ProdutoCarrinho from "../../Components/Cards/ProdutoCarrinho";

import { DivProdutos, MainContainer, Footer } from "./style";
import { Button } from "../../Components/Button/PrimaryButton/style";

import Header from "../../Components/Header";
import { useEffect } from "react";
import { useUsuario } from "../../Providers/Usuario";

const Cart = () => {
  const { isStore } = useUsuario();
  const history = useHistory();

  useEffect(() => {
    if (isStore) {
      history.push("/dashboard/store");
    }
    //eslint-disable-next-line
  }, [isStore]);

  const { carrinho } = useCarrinho();
  // const { global } = useGlobal();
  let contador = 0;

  return (
    <div>
      <Header />
      <MainContainer>
        <section onClick={() => history.push("/products")}>
          Ver mais produtos
        </section>
        <h3>Adicione ou Remova itens e prossiga para o orçamento</h3>
        <DivProdutos>
          {carrinho &&
            carrinho.map((produto, index) => {
              contador += produto.quantity;
              return (
                <ProdutoCarrinho
                  produto={produto}
                  index={index}
                  contador={contador}
                />
              );
            })}
          {carrinho.length < 1 && <h1>Carrinho vazio!</h1>}
        </DivProdutos>
      </MainContainer>
      <Footer>
        <p>Número de Produtos: {contador}</p>
        <Button onClick={() => history.push("/checkout")}>
          Solicitar Orçamento
        </Button>
      </Footer>
    </div>
  );
};

export default Cart;
