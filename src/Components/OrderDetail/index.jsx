import { useState } from "react";
import Pedido from "../Cards/Pedido";

import ModalCard from "../ModalCard";

const OrderDetail = ({ pedido }) => {
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
        <Pedido pedido={pedido} setOpen={setOpen}></Pedido>
      </ModalCard>
    </>
  );
};

export default OrderDetail;
