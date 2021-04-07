import { Button } from "../../Button/PrimaryButton/style";
import { Container, Footer, Image, Name, StoreInfo } from "./style";

const StoreCard = ({ name, imageUrl }) => {
  return (
    <>
      <Container>
        <Image>
          <img src={imageUrl} alt="loja" />
        </Image>
        <StoreInfo>
          <Name>{name}</Name>
          <Footer>
            <Button>Ver mais</Button>
          </Footer>
        </StoreInfo>
      </Container>
    </>
  );
};

export default StoreCard;
