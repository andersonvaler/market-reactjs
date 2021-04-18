import { PedidoContainer, ProdutosContainer } from "./style";
import { Button } from "../../Button/PrimaryButton/style";
import ProdutoPreOrder from "../ProdutoPreOrder";
import api from "../../../services/api";
import { useToken } from "../../../Providers/Token";
import { useUsuario } from "../../../Providers/Usuario";
import { useState } from "react";

const PedidoAceito = ({ pedido, setOpen }) => {
  const [entrega, setEntrega] = useState();
  const { token } = useToken();
  const { usuario } = useUsuario();

  const sendOrder = () => {
    (entrega &&
      api
        .delete(`cart/${pedido.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          api.post(
            "notifications",
            {
              userId: pedido.userId,
              name: `O pedido sai de ${usuario.name}, chegará em aproximadamente ${entrega} minutos!`,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        })
        .then(() => setOpen(false))
        .catch((error) => {
          console.log(error);
        })) ||
      window.alert("Informe o tempo de entrega");
  };

  return (
    <PedidoContainer>
      <div>
        <h1>Pedido confirmado</h1>
        <h2>Cliente: {pedido.name} </h2>
        <h3>Endereço: {pedido.adress}</h3>
        <h3>Telefone: {pedido.number}</h3>
        <h3>Forma de pagamento: {pedido.pay || "Não informado"}</h3>
        <ProdutosContainer>
          {pedido.products.map((produto, index) => {
            return (
              <>
                <ProdutoPreOrder
                  key={index}
                  produto={produto}
                ></ProdutoPreOrder>
              </>
            );
          })}
        </ProdutosContainer>
      </div>
      <div className="send">
        <div className="value">
          <h3>Tempo de entrega: </h3>
          <input
            type="number"
            placeholder={"Minutos"}
            onChange={(e) => setEntrega(e.target.value)}
          />
        </div>

        <Button onClick={() => sendOrder()}>Sinalizar entrega</Button>
      </div>
    </PedidoContainer>
  );
};

export default PedidoAceito;
