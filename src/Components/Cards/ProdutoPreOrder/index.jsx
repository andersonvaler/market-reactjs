import ImageGenerator from "../../ImageGenerator";

import {
  DivContador,
  Card,
  DescricaoCard,
  TituloCard,
  ProdutoImg,
} from "./style";

const ProdutoPreOrder = ({ produto }) => {
  return (
    <Card key={produto.index}>
      <ProdutoImg>
        <ImageGenerator category={produto.category} alt={produto.name} />
      </ProdutoImg>
      <TituloCard>{produto.name}</TituloCard>
      <DescricaoCard>{produto.description}</DescricaoCard>
      <DivContador>
        <p>
          {produto.quantity}
          {produto.unit}
        </p>
      </DivContador>
    </Card>
  );
};

export default ProdutoPreOrder;
