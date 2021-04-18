import { useState } from "react";
import PedidoAceito from "../Cards/PedidoAceito";

import ModalCard from "../ModalCard";

const OrderConfirmed = ({ pedido }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr key={pedido.index}>
        <td className="name">{pedido.name}</td>
        <td className="adress">{pedido.adress}</td>
        <td className="button">
          <button onClick={() => setOpen(!open)}>Detalhar</button>
        </td>
      </tr>
      <ModalCard open={open} setOpen={setOpen}>
        <PedidoAceito pedido={pedido} setOpen={setOpen}></PedidoAceito>
      </ModalCard>
    </>
  );
};

export default OrderConfirmed;
