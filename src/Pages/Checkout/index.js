// import { useMercados } from "../../Providers/ListaMercados";
import Header from "../../Components/Header";
import StoreCardFinal from "../../Components/Cards/StoreCardFinal";
import {
  Edit,
  Topic,
  Lojas,
  CardIcon,
  ButtonCartao,
  ContainerButton,
  CardIconMoney,
  CheckoutDiv,
  CheckIcon,
} from "./style";
import { MainContainer, CartFooter } from "../Cart/style";
import { EditIcon } from "../../Components/PerfilUser/style";
import { Button } from "../../Components/Button/PrimaryButton/style";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useUsuario } from "../../Providers/Usuario";
import { usePedidosRecebidos } from "../../Providers/PedidosRecebidos";
import Footer from "../../Components/Footer";
import api from "../../services/api";
import { useToken } from "../../Providers/Token";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { pedidosRecebidos } = usePedidosRecebidos();
  const { isStore, usuario } = useUsuario();
  const history = useHistory();
  const [metodoSelecionado, setMetodoSelecionado] = useState("");
  const [lojaSelecionada, setLojaSelecionada] = useState({});
  const { token } = useToken();

  const notifySend = () =>
    toast.success("Pedido Enviado com sucesso", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const confirmOrder = () => {
    if (lojaSelecionada.hasOwnProperty("store") && metodoSelecionado) {
      const data = {
        ...lojaSelecionada,
        isOrder: true,
        pay: metodoSelecionado,
      };

      api
        .patch(`cart/${lojaSelecionada.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setLojaSelecionada([]);
          setMetodoSelecionado("");
          history.push("/dashboard/user");
          notifySend();
        })
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    if (isStore) {
      history.push("/dashboard/store");
    }
    //eslint-disable-next-line
  }, [isStore]);

  return (
    <div>
      <ToastContainer />
      <Header />
      <MainContainer>
        <CheckoutDiv>
          <h1>Seus dados:</h1>
          <Topic>Endere??o:</Topic>
          <Edit>
            <h4>{usuario && usuario.adress}</h4>
            <div>
              <h4>Editar endere??o</h4>
              <EditIcon onClick={() => history.push("/profile/user")} />
            </div>
          </Edit>
          <Topic>Telefone:</Topic>
          <Edit>
            <h4>{usuario && usuario.number}</h4>
            <div>
              <h4>Editar telefone</h4>
              <EditIcon onClick={() => history.push("/profile/user")} />
            </div>
          </Edit>
        </CheckoutDiv>

        <br />

        <div>
          <h2>Or??amentos recebidos:</h2>
          <Lojas>
            {pedidosRecebidos &&
              pedidosRecebidos.length > 0 &&
              pedidosRecebidos.map((pedido, index) => (
                <StoreCardFinal
                  pedido={pedido}
                  name={pedido.store?.storeName}
                  valor={pedido.store?.price}
                  key={index}
                  imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtpaqHXNFVQIc-f5uMn2SI37D8LLkShXvwg&usqp=CAU"
                  setLojaSelecionada={setLojaSelecionada}
                  lojaSelecionada={lojaSelecionada}
                />
              ))}
            {pedidosRecebidos && pedidosRecebidos.length < 1 && (
              <>Nenhum or??amento recebido</>
            )}
          </Lojas>
        </div>

        <h2>M??todos de pagamento:</h2>
        <ContainerButton>
          <ButtonCartao
            selecionado={metodoSelecionado === "cart??o"}
            onClick={() =>
              metodoSelecionado === "cart??o"
                ? setMetodoSelecionado("")
                : setMetodoSelecionado("cart??o")
            }
          >
            {metodoSelecionado === "cart??o" && <CheckIcon />}
            <CardIcon selecionado={metodoSelecionado === "cart??o"} />
            Cart??o de cr??dito
          </ButtonCartao>
          <ButtonCartao
            selecionado={metodoSelecionado === "dinheiro"}
            onClick={() =>
              metodoSelecionado === "dinheiro"
                ? setMetodoSelecionado("")
                : setMetodoSelecionado("dinheiro")
            }
          >
            {metodoSelecionado === "dinheiro" && <CheckIcon />}
            <CardIconMoney selecionado={metodoSelecionado === "dinheiro"} />
            Dinheiro
          </ButtonCartao>
        </ContainerButton>
      </MainContainer>

      <CartFooter>
        <div>
          <p>{lojaSelecionada.store?.storeName || "Selecione uma loja"}</p>
          <p>Total: R${lojaSelecionada.store?.price || "0"}</p>
        </div>
        <Button onClick={confirmOrder}>Confirmar</Button>
      </CartFooter>
      <Footer />
    </div>
  );
};

export default Checkout;
