import { ModalCardContainer } from "./style";

/* Para fazer funcionar precisa:
1- Importar esse componente
2- Criar um state: const [open, setOpen] = useState(false)
3- Passar o open e o setOpen por props <ModalConfirmado open={open} setOpen={setOpen}/>
3- Adicionar onClick={() => setOpen(true)} no botão que for abrir o modal */

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
