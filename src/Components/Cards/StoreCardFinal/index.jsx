import { Button } from "../../Button/PrimaryButton/style";
import { Container, Footer, Image, Name, StoreInfo } from "./style";
import ModalProdutos from "../../ModalProdutos";
import { useState } from "react";

const StoreCardFinal = ({ name, valor, imageUrl }) => {
  const [open, setOpen] = useState(false);
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
          <Button onClick={() => setOpen(!open)}>Detalhes</Button>
        </Footer>
      </Container>
      <ModalProdutos open={open} setOpen={setOpen} />
    </>
  );
};

export default StoreCardFinal;
