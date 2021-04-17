import { Button } from "../../Button/PrimaryButton/style";
import {
  Container,
  Footer,
  Image,
  Name,
  StoreInfo,
  MarketName,
  MarketAdress,
} from "./style";
import { useState } from "react";
import ModalCard from "../../ModalCard";

const StoreCard = ({ name, imageUrl, adress }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <Image>
          <img src={imageUrl} alt="loja" />
        </Image>
        <StoreInfo>
          <Name>{name}</Name>
          <Footer>
            <Button onClick={() => setOpen(!open)}>Ver endereço</Button>
          </Footer>
        </StoreInfo>
      </Container>
      <ModalCard open={open} setOpen={setOpen}>
        <MarketName>{name}</MarketName>
        <MarketAdress>{adress}</MarketAdress>
      </ModalCard>
    </>
  );
};

export default StoreCard;
