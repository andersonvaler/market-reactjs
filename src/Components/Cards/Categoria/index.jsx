import { CategoriaContainer, ImageContainer, NewButton } from "./style";
import ImageGenerator from "../../ImageGenerator";
import ModalCard from "../../ModalCard";
import ProdutosEmCategoria from "../../ProdutosEmCategoria";
import { useState } from "react";

const Categoria = ({ category, produtos }) => {
  const [open, setOpen] = useState(false);

  return (
    <CategoriaContainer>
      <ImageContainer>
        <ImageGenerator
          productName={category}
          category={category.toLowerCase()}
        />
      </ImageContainer>
      <div className="text-categoria">
        <h3>Número de produtos: {produtos?.length}</h3>
        <NewButton onClick={() => setOpen(true)}>Ver produtos</NewButton>
      </div>
      <ModalCard open={open} setOpen={setOpen}>
        <ProdutosEmCategoria produtos={produtos} setOpen={setOpen} />
      </ModalCard>
    </CategoriaContainer>
  );
};

export default Categoria;
