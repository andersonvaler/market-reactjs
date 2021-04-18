import { CategoriaContainer } from "./style";
import { Button } from "../../Button/PrimaryButton/style";
import { ImageGenerator } from "../../ImageGenerator";

const Categoria = ({ quantity, image }) => {
  return (
    <CategoriaContainer>
      <img alt="" src={image} className="image-category" />
      <div className="text-categoria">
        <h3>Número de produtos: {quantity}</h3>
        <Button>Ver produtos</Button>
      </div>
    </CategoriaContainer>
  );
};

export default Categoria;
