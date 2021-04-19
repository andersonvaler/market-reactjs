import { Container, SemPedido } from "./style";
import { usePedidosRecebidos } from "../../Providers/PedidosRecebidos";
import { useUsuario } from "../../Providers/Usuario";
import { useState, useEffect } from "react";
import OrderConfirmed from "../OrderConfirmed";

const Order = () => {
  const { usuario } = useUsuario();
  const { pedidosRecebidos } = usePedidosRecebidos();
  const [order, setOrder] = useState();

  useEffect(() => {
    setOrder(
      pedidosRecebidos &&
        pedidosRecebidos.filter(
          (pedido) => pedido.isOrder && pedido.store.storeId === usuario.id
        )
    );
  }, [pedidosRecebidos, usuario]);

  return (
    <>
      <Container>
        {order && order.length > 0 && (
          <table>
            <tr className="titleTable">
              <td>Usuario</td>
              <td>Endereço</td>
              <td></td>
            </tr>
            {order &&
              order.map((pedido, index) => {
                return (
                  <>
                    <OrderConfirmed pedido={pedido} key={index} />
                  </>
                );
              })}
          </table>
        )}
        {order && order.length < 1 && (
          <SemPedido>
            <h2>Nenhum pedido pendente!</h2>
          </SemPedido>
        )}
      </Container>
    </>
  );
};

export default Order;
