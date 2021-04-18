import ModalCard from "../../Components/ModalCard";
import { ModalProdutosContainer } from "./style";
import { useCarrinho } from "../../Providers/Carrinho";
import { Button } from "../../Components/Button/PrimaryButton/style";
import { useState } from "react";
import ModalConfimado from "../../Components/ModalConfirmado";

const ModalProdutos = ({ open, setOpen }) => {
  const { carrinho } = useCarrinho();
  const [change, setChange] = useState(true);

  return (
    <>
      <ModalCard open={open} setOpen={setOpen}>
        {change ? (
          <ModalProdutosContainer>
            <h1>Produtos</h1>
            {carrinho &&
              carrinho.map((produto) => {
                return (
                  <div className="total-produtos">
                    <h3>
                      {produto.name} x{produto.quantity}
                    </h3>
                    <h3>R$20,00</h3>
                  </div>
                );
              })}
            {carrinho.length < 1 && <h1>Carrinho vazio!</h1>}

            <div className="total-produtos">
              <h3>Total produtos:</h3>
              <h3>R$200,00</h3>
            </div>

            <div className="total-produtos">
              <h3>Entrega:</h3>
              <h3>R$20,00</h3>
            </div>

            <div className="total-produtos">
              <h3>Valor final:</h3>
              <h3>R$220,00</h3>
            </div>

            <Button onClick={() => setChange(false)}>Confirmar</Button>
          </ModalProdutosContainer>
        ) : (
          <ModalConfimado>
            <Button onClick={() => setOpen(true)}>Confirmar</Button>
          </ModalConfimado>
        )}
      </ModalCard>
    </>
  );
};

export default ModalProdutos;
