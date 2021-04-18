import { PedidoContainer } from "./style";
import { Button } from "../../Button/PrimaryButton/style";

const Pedido = ({ pedido }) => {
  console.log(pedido);
  return (
    <PedidoContainer>
      <h2>Detalhes do pedido</h2>
      <h4>Cliente: {pedido.name} </h4>
      <h4>Endereço: {pedido.adress}</h4>
      <h4>Telefone: {pedido.number}</h4>
      <Button>Enviar orçamento</Button>
    </PedidoContainer>
  );
};

export default Pedido;
