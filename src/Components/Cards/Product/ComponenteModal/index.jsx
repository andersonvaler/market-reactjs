import { ProductName, Input, Modal } from "../style";
import { Button } from "../../../Button/PrimaryButton/style";

import { useState } from "react";
import { useCarrinho } from "../../../../Providers/Carrinho";

const ComponenteModal = ({ produto, setOpen }) => {
  const [quantidade, setQuantidade] = useState();
  const { carrinho, setCarrinho } = useCarrinho();

  const manipulaCarrinho = () => {
    if (quantidade < 1 || !quantidade) {
      produto["quantity"] = parseInt(1);
      setCarrinho([...carrinho, produto]);
    } else {
      produto["quantity"] = parseInt(quantidade);
      setCarrinho([...carrinho, produto]);
    }
    setOpen(false);
  };

  return (
    <Modal>
      <ProductName>Escolha a quantidade</ProductName>
      <Input
        type="number"
        placeholder="Ex: 1 (unidade)"
        onChange={(data) => setQuantidade(data.target.value)}
        value={quantidade}
      />
      <Button onClick={manipulaCarrinho}>Confirmar</Button>
    </Modal>
  );
};

export default ComponenteModal;
