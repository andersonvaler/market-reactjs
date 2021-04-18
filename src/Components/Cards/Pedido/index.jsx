import { PedidoContainer, ProdutosContainer } from "./style";
import { Button } from "../../Button/PrimaryButton/style";
import ProdutoCarrinho from "../ProdutoCarrinho";

const Pedido = ({ pedido }) => {
  return (
    <PedidoContainer>
      <h2>Detalhes do pedido</h2>
      <h4>Cliente: {pedido.name} </h4>
      <h4>Endereço: {pedido.adress}</h4>
      <h4>Telefone: {pedido.number}</h4>
      <ProdutosContainer>
        {pedido.products.map((produto, index) => {
          return (
            <>
              <ProdutoCarrinho key={index} produto={produto}></ProdutoCarrinho>
            </>
          );
        })}
      </ProdutosContainer>
      <Button>Enviar orçamento</Button>
    </PedidoContainer>
  );
};

export default Pedido;
