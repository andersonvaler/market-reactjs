import { Container } from "./style";
import { usePedidos } from "../../Providers/Pedidos";
import { useState, useEffect } from "react";
const PreOrder = () => {
  const { pedidos } = usePedidos();
  const [preOrder, setPreOrder] = useState();

  useEffect(() => {
    setPreOrder(pedidos.filter((pedido) => pedido.available));
  }, [pedidos]);

  return (
    <>
      <Container>
        <table>
          <tr>
            <td>Usuario</td>
            <td>Endereço</td>
            <td>Telefone</td>
            <td>Nº de produtos</td>
          </tr>
          {preOrder &&
            preOrder.map(({ name, products, adress, number, index }) => {
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{adress}</td>
                  <td>{number}</td>
                  <td>{products.length}</td>
                </tr>
              );
            })}
        </table>
      </Container>
    </>
  );
};

export default PreOrder;
