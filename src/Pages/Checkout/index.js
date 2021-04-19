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

const Checkout = () => {
  const { pedidosRecebidos } = usePedidosRecebidos();
  const { isStore, usuario } = useUsuario();
  const history = useHistory();
  const [metodoSelecionado, setMetodoSelecionado] = useState("");
  const [lojaSelecionada, setLojaSelecionada] = useState({});
  const { token } = useToken();

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
      <Header />
      <MainContainer>
        <CheckoutDiv>
          <h1>Seus dados:</h1>
          <Topic>Endereço:</Topic>
          <Edit>
            <h4>{usuario && usuario.adress}</h4>
            <div>
              <h4>Editar endereço</h4>
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
          <h2>Orçamentos recebidos:</h2>
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
              <>Nenhum orçamento recebido</>
            )}
          </Lojas>
        </div>

        <h2>Métodos de pagamento:</h2>
        <ContainerButton>
          <ButtonCartao
            selecionado={metodoSelecionado === "cartão"}
            onClick={() =>
              metodoSelecionado === "cartão"
                ? setMetodoSelecionado("")
                : setMetodoSelecionado("cartão")
            }
          >
            {metodoSelecionado === "cartão" && <CheckIcon />}
            <CardIcon selecionado={metodoSelecionado === "cartão"} />
            Cartão de crédito
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
