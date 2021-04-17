import { useCarrinho } from "../../../Providers/Carrinho";
import {
  DivContador,
  Button,
  Card,
  DescricaoCard,
  TituloCard,
  ProdutoImg,
  ButtonDel,
  CardIcon,
} from "./style";

const ProdutoCarrinho = ({ produto, index, contador }) => {
  const { setCarrinho } = useCarrinho();
  let fakeCarrinho = JSON.parse(localStorage.getItem("carrinho"));

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
  const deletaCard = () => {
    fakeCarrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(fakeCarrinho));
    setCarrinho(fakeCarrinho);
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
      <ButtonDel onClick={deletaCard}>
        <CardIcon />
      </ButtonDel>
    </Card>
  );
};

export default ProdutoCarrinho;
