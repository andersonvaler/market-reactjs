import { PedidoContainer, ProdutosContainer } from "./style";
import { Button } from "../../Button/PrimaryButton/style";
import ProdutoPreOrder from "../ProdutoPreOrder";
import api from "../../../services/api";
import { useToken } from "../../../Providers/Token";
import { useUsuario } from "../../../Providers/Usuario";
import { useState } from "react";

const Pedido = ({ pedido, setOpen }) => {
  const [price, setPrice] = useState();
  const { token } = useToken();
  const { usuario } = useUsuario();

  const sendOrder = () => {
    const data = {
      ...pedido,
      store: {
        storeName: usuario.name,
        storeId: usuario.id,
        storeAdress: usuario.adress,
        price: price,
      },
    };
    api
      .post(
        "cart",
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        api.post(
          "notifications",
          { userId: pedido.userId, name: `Novo orçamento de ${usuario.name}` },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      })
      .then(() =>
        api.patch(
          `order/${pedido.id}`,
          { available: false },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      )
      .then(() => setOpen(false))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <PedidoContainer>
      <div>
        <h2>Detalhes do pedido</h2>
        <h3>Cliente: {pedido.name} </h3>
        <h3>Endereço: {pedido.adress}</h3>
        <h3>Telefone: {pedido.number}</h3>
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
          <h3>Insira o valor: </h3>
          <input
            type="number"
            placeholder={"R$"}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <Button onClick={() => sendOrder()}>Enviar orçamento</Button>
      </div>
    </PedidoContainer>
  );
};

export default Pedido;
