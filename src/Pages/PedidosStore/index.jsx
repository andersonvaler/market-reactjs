import { PedidosPageContainer, LeftContainer, RightContainer } from "./style";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PreOrder from "../../Components/PreOrders";
// import Pedido from "../../Components/Cards/Pedido";
// import PedidoAceito from "../../Components/Cards/PedidoAceito";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUsuario } from "../../Providers/Usuario";

const PedidosStore = () => {
  const { isStore } = useUsuario();
  const history = useHistory();

  useEffect(() => {
    if (!isStore) {
      history.push("/dashboard/user");
    }
    //eslint-disable-next-line
  }, [isStore]);
  return (
    <>
      <Header />
      <PedidosPageContainer>
        <LeftContainer>
          <h1>Orçamentos</h1>
          <PreOrder />
        </LeftContainer>
        <RightContainer>
          <h1>Pedidos</h1>
        </RightContainer>

        {/* <h1>Pedidos em andamento</h1>
        <PedidosContainer>
          <Pedido />
          <Pedido />
          <Pedido />
          <Pedido />
          <Pedido />
          <Pedido />
          <Pedido />
          <Pedido />
          <Pedido />
          <Pedido />
        </PedidosContainer>
        <h1>Pedidos em aberto</h1>
        <PedidosContainer>
          <PedidoAceito />
          <PedidoAceito />
          <PedidoAceito />
          <PedidoAceito />
          <PedidoAceito />
          <PedidoAceito />
          <PedidoAceito />
          <PedidoAceito />
          <PedidoAceito />
          <PedidoAceito />
        </PedidosContainer> */}
      </PedidosPageContainer>
      <Footer />
    </>
  );
};

export default PedidosStore;
