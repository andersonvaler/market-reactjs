import { Button } from "../../Button/PrimaryButton/style";
import { Container, Footer, Image, Name, StoreInfo } from "./style";

const StoreCardFinal = ({
  name,
  valor,
  imageUrl,
  lojaSelecionada,
  setLojaSelecionada,
  pedido,
}) => {
  return (
    <>
      <Container>
        <div>
          <Image>
            <img src={imageUrl} alt="loja" />
          </Image>
          <StoreInfo>
            <Name>{name}</Name>
            <h3>R${valor}</h3>
          </StoreInfo>
        </div>
        <Footer>
          {pedido.store?.storeId === lojaSelecionada.store?.storeId ? (
            <Button disabled>Selecionado</Button>
          ) : (
            <Button onClick={() => setLojaSelecionada(pedido)}>
              Selecionar
            </Button>
          )}
        </Footer>
      </Container>
    </>
  );
};

export default StoreCardFinal;
