import { Button } from "../../Button/PrimaryButton/style";
import { Container, Footer, Image, Name, StoreInfo } from "./style";
import ModalProdutos from "../../ModalProdutos";
import { useState } from "react";

const StoreCardFinal = ({ name, imageUrl }) => {
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
            <Button onClick={() => setOpen(!open)}>Detalhes</Button>
          </Footer>
        </StoreInfo>
      </Container>
      <ModalProdutos open={open} setOpen={setOpen} />
    </>
  );
};

export default StoreCardFinal;
