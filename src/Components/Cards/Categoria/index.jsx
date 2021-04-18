import { CategoriaContainer, ImageContainer, NewButton } from "./style";
import ImageGenerator from "../../ImageGenerator";

const Categoria = ({ quantity, category }) => {
  return (
    <CategoriaContainer>
      <ImageContainer>
        <ImageGenerator productName={category} category={category} />
      </ImageContainer>
      <div className="text-categoria">
        <h3>Número de produtos: {quantity}</h3>
        <NewButton>Ver produtos</NewButton>
      </div>
    </CategoriaContainer>
  );
};

export default Categoria;
