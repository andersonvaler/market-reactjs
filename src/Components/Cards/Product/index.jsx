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
          <img
            src={
              "https://conteudo.imguol.com.br/c/entretenimento/32/2018/01/18/maca-1516308281068_v2_1920x1279.jpg"
            }
            alt="product"
          />
        </ProductImg>
      </Container>
    </div>
  );
};

export default Product;
