import { ModalCardContainer } from "./style";

const ModalConfirmado = ({ open, setOpen }) => {
  const objeto = {
    nome: "Extra",
    total: 88.23,
    entrega: 20.0,
  };
  return (
    <ModalCardContainer>
      <h1> Pedido confirmado</h1>
      <div>
        <img
          className="img-modal"
          alt=""
          src="https://www.divulgaacao.com.br/wp-content/uploads/2013/07/Extra-Vermelho.jpg"
        />
        <h3>{objeto.nome}</h3>
        <h3>Total produtos: R${objeto.total}</h3>
        <h3>Entrega: R${objeto.entrega}</h3>
        <h3>Valor final: R${objeto.total + objeto.entrega}</h3>
      </div>
    </ModalCardContainer>
  );
};

export default ModalConfirmado;
