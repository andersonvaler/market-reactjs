import { PedidoContainer } from "./style";

const PedidoAceito = () => {
  return (
    <PedidoContainer>
      <h2>Detalhes do pedido</h2>
      <h3>Nome do cliente: Ricardo </h3>
      <h3>Endereço: Rua não sei das quantas, n 221</h3>
      <h3>Telefone: (00) 99999-9999</h3>
      <h3>Preço da lista: R$ 89,23</h3>
      <h3>Tempo estimado: 25min</h3>
      <h3>Valor da entrega: R$ 20,00</h3>
      <h3>Total: R$ 109,23</h3>
    </PedidoContainer>
  );
};

export default PedidoAceito;
