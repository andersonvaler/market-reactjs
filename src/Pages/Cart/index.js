import { useHistory } from "react-router";
import { useCarrinho } from "../../Providers/Carrinho";
// import { useGlobal } from "../../Providers/Global";

import ProdutoCarrinho from "../../Components/Cards/ProdutoCarrinho";

import { DivProdutos, MainContainer, Footer, Contador } from "./style";
import { Button } from "../../Components/Button/PrimaryButton/style";

import Header from "../../Components/Header";

const Cart = () => {
  const history = useHistory();

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

        <h3>Escolhas seu melhores produtos e solicite orçamentos</h3>
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
        <Contador>Número de Produtos: {contador}</Contador>
        <Button>Solicitar Orçamento</Button>
      </Footer>
    </div>
  );
};

export default Cart;
