import { PedidoContainer } from "./style";
import Button from "../../Button/PrimaryButton";

const Pedido = () => {
  return (
    <PedidoContainer>
      <h2>Detalhes do pedido</h2>
      <h3>Nome do cliente: Ricardo </h3>
      <h3>Endereço: Rua não sei das quantas, n 221</h3>
      <h3>Telefone: (00) 99999-9999</h3>
      <h3>Preço: R$ 89,23</h3>
      <h3>Método de pagamento: Cartão</h3>
      <Button children="Sinalizar entrega" />
    </PedidoContainer>
  );
};

export default Pedido;
