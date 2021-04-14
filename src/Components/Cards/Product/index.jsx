import { Button } from "../../Button/PrimaryButton/style";
import { RiInformationFill } from "react-icons/ri";
import {
  Container,
  ProductInfo,
  ProductImg,
  ProductName,
  Description,
  ProductHeader,
} from "./style";

import ModalCard from "../../ModalCard/index";

import { useState } from "react";
import ComponenteModal from "./ComponenteModal";

const Product = ({ produto }) => {
  const [open, setOpen] = useState(false);
  const abrirModal = () => {
    setOpen(true);
  };
  return (
    <div>
      <Container>
        <ProductInfo>
          <ProductHeader>
            <ProductName>{produto.name}</ProductName>
            <RiInformationFill
              style={{
                fontSize: "1.6rem",
                color: "#380F52",
                cursor: "pointer",
              }}
            />
          </ProductHeader>
          <Description>{produto.price}</Description>
          <Button onClick={abrirModal}>Pedir Agora</Button>
          <ModalCard open={open} setOpen={setOpen}>
            <ComponenteModal produto={produto} setOpen={setOpen} />
          </ModalCard>
        </ProductInfo>
        <ProductImg>
          <img src={null} alt="product" />
        </ProductImg>
      </Container>
    </div>
  );
};

export default Product;
