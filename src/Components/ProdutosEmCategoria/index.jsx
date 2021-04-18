import { ProdutosContainer } from "./style";
import Product from "../Cards/Product";

const ProdutosEmCategoria = ({ setOpen, produtos }) => {
  return (
    <ProdutosContainer>
      {produtos &&
        produtos.map((produto, index) => (
          <Product key={index} produto={produto} store />
        ))}
    </ProdutosContainer>
  );
};

export default ProdutosEmCategoria;
