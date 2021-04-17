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
} from "./style";
import { MainContainer, Footer } from "../Cart/style";
import { EditIcon } from "../../Components/PerfilUser/style";
import { Button } from "../../Components/Button/PrimaryButton/style";

const Checkout = () => {
  const { mercados } = useMercados();

  return (
    <div>
      <Header />
      <MainContainer>
        <div>
          <h1>Confirme os dados:</h1>
          <Topic>Endereço:</Topic>
          <Edit>
            <h4>R. Não sei das quantas, n 235</h4>
            <EditIcon />
          </Edit>
          <Topic>Telefone:</Topic>
          <Edit>
            <h4>(00) 99999-9999</h4>
            <EditIcon />
          </Edit>
        </div>

        <br />

        <div>
          <h1>Orçamentos retornados:</h1>
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
          <h1>Métodos de pagamento:</h1>
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
