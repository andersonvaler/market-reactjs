import { ProductName, Input } from "../style";
import { Button } from "../../../Button/PrimaryButton/style";

import { useState } from "react";
import { useCarrinho } from "../../../../Providers/Carrinho";

const ComponenteModal = ({ produto, setOpen }) => {
  const [quantidade, setQuantidade] = useState(0);
  const { carrinho, setCarrinho } = useCarrinho();

  const manipulaCarrinho = () => {
    produto["quantity"] = parseInt(quantidade);
    setCarrinho([...carrinho, produto]);
    setOpen(false);
  };

  return (
    <>
      <ProductName>Escolha a quantidade</ProductName>
      <Input
        type="number"
        placeholder="Ex: 1 (unidade)"
        onChange={(data) => setQuantidade(data.target.value)}
        value={quantidade}
      />
      <Button onClick={manipulaCarrinho}>Adicionar ao Carrinho</Button>
    </>
  );
};

export default ComponenteModal;
