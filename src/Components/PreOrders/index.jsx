import { Container, SemPedido } from "./style";
import { usePedidos } from "../../Providers/Pedidos";
import { useState, useEffect } from "react";
import ModalCard from "../ModalCard";
import Pedido from "../Cards/Pedido";
const PreOrder = () => {
  const { pedidos } = usePedidos();
  const [preOrder, setPreOrder] = useState();
  const [open, setOpen] = useState(false);

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
                    <tr key={index}>
                      <td className="name">{pedido.name}</td>
                      <td className="adress">{pedido.adress}</td>
                      <td className="button">
                        <button onClick={() => setOpen(!open)}>Detalhar</button>
                      </td>
                    </tr>
                    <ModalCard open={open} setOpen={setOpen}>
                      <Pedido pedido={pedido}></Pedido>
                    </ModalCard>
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
