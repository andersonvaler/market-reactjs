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
} from "./style";
import { MainContainer, CartFooter } from "../Cart/style";
import { EditIcon } from "../../Components/PerfilUser/style";
import { Button } from "../../Components/Button/PrimaryButton/style";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useUsuario } from "../../Providers/Usuario";
import { usePedidosRecebidos } from "../../Providers/PedidosRecebidos";
import Footer from "../../Components/Footer";
/* import ModalProdutos from "../../Components/ModalProdutos"; */

const Checkout = () => {
  const { pedidosRecebidos } = usePedidosRecebidos();
  // const { mercados } = useMercados();
  const { isStore, usuario } = useUsuario();
  const history = useHistory();
  const [open, setOpen] = useState(false);

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
            <EditIcon />
          </Edit>
          <Topic>Telefone:</Topic>
          <Edit>
            <h4>{usuario && usuario.number}</h4>
            <EditIcon />
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
                  name={pedido.store?.storeName}
                  valor={pedido.store?.price}
                  open={open}
                  setOpen={setOpen}
                  key={index}
                  imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtpaqHXNFVQIc-f5uMn2SI37D8LLkShXvwg&usqp=CAU"
                />
              ))}
            {pedidosRecebidos && pedidosRecebidos.length < 1 && (
              <>Nenhum orçamento recebido</>
            )}
          </Lojas>
        </div>

        <div>
          <ContainerButton>
            <ButtonCartao>
              <CardIcon />
              Cartão de crédito
            </ButtonCartao>
            <ButtonCartao>
              <CardIconMoney />
              Dinheiro
            </ButtonCartao>
          </ContainerButton>
        </div>
      </MainContainer>

      <CartFooter>
        <div>
          <p>Nome</p>
          <p>Total: 0</p>
        </div>
        <Button onClick={() => setOpen(true)}>Confirmar</Button>
      </CartFooter>
      <Footer />
    </div>
  );
};

export default Checkout;
