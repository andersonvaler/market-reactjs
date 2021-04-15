import { useGlobal } from "../../../Providers/Global";
import {
  DivContador,
  Button,
  Card,
  DescricaoCard,
  TituloCard,
  ProdutoImg,
} from "./style";

const ProdutoCarrinho = ({ valor, index, contador }) => {
  const { global, setGlobal } = useGlobal();

  const addContador = () => {
    contador++;
    valor.quantity += 1;
    setGlobal(!global);
  };
  const subContador = () => {
    if (valor.quantity > 0) {
      contador++;
      valor.quantity -= 1;
      setGlobal(!global);
    }
  };
  return (
    <Card key={index}>
      <ProdutoImg>
        <img src={null} alt="product" />
      </ProdutoImg>
      <TituloCard>{valor.name}</TituloCard>
      <DescricaoCard>Olá bom dia</DescricaoCard>
      <DivContador>
        <Button onClick={subContador}>-</Button>
        <p>{valor.quantity}</p>
        <Button onClick={addContador}>+</Button>
      </DivContador>
    </Card>
  );
};

export default ProdutoCarrinho;
