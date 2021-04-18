import { Container, SemPedido } from "./style";
import { usePedidos } from "../../Providers/Pedidos";
import { useState, useEffect } from "react";
import OrderDetail from "../OrderDetail";
const PreOrder = () => {
  const { pedidos } = usePedidos();
  const [preOrder, setPreOrder] = useState();

  useEffect(() => {
    setPreOrder(pedidos && pedidos.filter((pedido) => pedido.available));
  }, [pedidos]);

  return (
    <>
      <Container>
        {preOrder && preOrder.length > 0 && (
          <table>
            <tr className="titleTable">
              <td>Usuario</td>
              <td>Endereço</td>
              <td></td>
            </tr>
            {preOrder &&
              preOrder.map((pedido, index) => {
                return (
                  <>
                    <OrderDetail pedido={pedido} />
                  </>
                );
              })}
          </table>
        )}
        {preOrder && preOrder.length < 1 && (
          <SemPedido>
            <h1>Nenhum orçamento pendente</h1>
          </SemPedido>
        )}
      </Container>
    </>
  );
};

export default PreOrder;
