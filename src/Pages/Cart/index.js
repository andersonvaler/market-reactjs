import { useHistory } from "react-router";
import { useCarrinho } from "../../Providers/Carrinho";
import { useGlobal } from "../../Providers/Global";

import ProdutoCarrinho from "../../Components/Cards/ProdutoCarrinho";

import { DivProdutos, MainContainer, Footer, Contador } from "./style";
import { Button } from "../../Components/Button/PrimaryButton/style";

import Header from "../../Components/Header";

const Cart = () => {
  const history = useHistory();

  const { carrinho } = useCarrinho();
  const { global } = useGlobal();
  let contador = 0;

  return (
    <div>
      <Header />
      <MainContainer>
        <button onClick={() => history.push("/products")}>Ir para Store</button>
        <h1>Carrinho:</h1>
        <h3>Adicione ou Remova itens e prossiga para o orçamento</h3>
        <DivProdutos>
          {carrinho &&
            carrinho.map((valor, index) => {
              contador += valor.quantity;
              return (
                <ProdutoCarrinho
                  valor={valor}
                  index={index}
                  contador={contador}
                />
              );
            })}
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
