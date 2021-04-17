import { useState } from "react";
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
  const { carrinho, setCarrinho } = useCarrinho();
  // const [fakeCarrinho, setFakeCarrinho] = useState(carrinho);

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
    console.log("Index", index);
    carrinho.splice(index, 1);
    console.log("Carrinho", carrinho);
    // setCarrinho(fakeCarrinho);
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
