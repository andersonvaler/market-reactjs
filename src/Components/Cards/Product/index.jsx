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
import { ToastContainer, toast } from "react-toastify";

const Product = ({ produto, store = false }) => {
  const { carrinho } = useCarrinho();
  const [open, setOpen] = useState(false);

  const abrirModal = () => {
    setOpen(true);
  };
  const notify = () => {
    toast.success("item adicionado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <ToastContainer />
      <Container>
        <ProductInfo>
          <ProductHeader>
            <ProductName>{produto.name}</ProductName>
          </ProductHeader>
          <Description>
            {produto.description || "Nenhuma descrição foi cadastrada"}
          </Description>
          {!store && (
            <Button
              onClick={abrirModal}
              disabled={carrinho.includes(produto) && "disabled"}
            >
              {carrinho.includes(produto)
                ? "Produto no carrinho"
                : "Adicionar ao carrinho"}
            </Button>
          )}
          <ModalCard open={open} setOpen={setOpen}>
            <ComponenteModal
              produto={produto}
              setOpen={setOpen}
              notify={notify}
            />
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
