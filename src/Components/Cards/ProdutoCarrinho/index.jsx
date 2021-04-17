import {
  DivContador,
  Button,
  Card,
  DescricaoCard,
  TituloCard,
  ProdutoImg,
} from "./style";

const ProdutoCarrinho = ({ produto, index, contador }) => {
  const addContador = () => {
    contador++;
    produto.quantity += 1;
  };
  const subContador = () => {
    if (produto.quantity > 0) {
      contador++;
      produto.quantity -= 1;
    }
  };
  return (
    <Card key={index}>
      <ProdutoImg>
        <img src={"https://picsum.photos/300/200"} alt="product" />
      </ProdutoImg>
      <TituloCard>{produto.name}</TituloCard>
      <DescricaoCard>{produto.description}</DescricaoCard>
      <DivContador>
        <Button onClick={subContador}>-</Button>
        <p>{produto.quantity}</p>
        <Button onClick={addContador}>+</Button>
      </DivContador>
    </Card>
  );
};

export default ProdutoCarrinho;
