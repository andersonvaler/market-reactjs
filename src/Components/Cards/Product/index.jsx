import { Button } from "../../Button/PrimaryButton/style";
import {
  Container,
  ProductInfo,
  ProductImg,
  ProductName,
  Description,
  ProductHeader,
} from "./style";
import { useCarrinho } from "../../../Providers/Carrinho";
import ModalCard from "../../ModalCard/index";
import { useState } from "react";

import ComponenteModal from "./ComponenteModal";
import ImageGenerator from "../../ImageGenerator";

const Product = ({ produto }) => {
  const { carrinho } = useCarrinho();
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
          </ProductHeader>
          <Description>
            {produto.description || "Nenhuma descrição foi cadastrada"}
          </Description>
          <Button
            onClick={abrirModal}
            disabled={carrinho.includes(produto) && "disabled"}
          >
            {carrinho.includes(produto)
              ? "Produto no carrinho"
              : "Adicionar ao carrinho"}
          </Button>
          <ModalCard open={open} setOpen={setOpen}>
            <ComponenteModal produto={produto} setOpen={setOpen} />
          </ModalCard>
        </ProductInfo>
        <ProductImg>
          <ImageGenerator
            category={produto.category}
            productName={produto.name}
          />
        </ProductImg>
      </Container>
    </div>
  );
};

export default Product;
