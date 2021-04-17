import { useMercados } from "../../Providers/ListaMercados";
import Header from "../../Components/Header";
import StoreCard from "../../Components/Cards/StoreCard";
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
import { MainContainer, Footer } from "../Cart/style";
import { EditIcon } from "../../Components/PerfilUser/style";
import { Button } from "../../Components/Button/PrimaryButton/style";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUsuario } from "../../Providers/Usuario";

const Checkout = () => {
  const { mercados } = useMercados();
  const { isStore, usuario } = useUsuario();
  const history = useHistory();

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
            <h4>{usuario.adress}</h4>
            <EditIcon />
          </Edit>
          <Topic>Telefone:</Topic>
          <Edit>
            <h4>{usuario.number}</h4>
            <EditIcon />
          </Edit>
        </CheckoutDiv>

        <br />

        <div>
          {/* <h1>Orçamentos retornados:</h1> */}

          <Lojas>
            {mercados &&
              mercados.map((mercado, index) => (
                <StoreCard
                  name={mercado.name}
                  adress={mercado.adress}
                  key={index}
                  imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtpaqHXNFVQIc-f5uMn2SI37D8LLkShXvwg&usqp=CAU"
                />
              ))}
          </Lojas>
        </div>

        <div>
          {/* <h1>Métodos de pagamento:</h1> */}
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

      <Footer>
        <div>
          <p>Nome</p>
          <p>Total: 0</p>
        </div>
        <Button>Confirmar</Button>
      </Footer>
    </div>
  );
};

export default Checkout;
