import { PagamentosContainer, CardIcon } from "./style";
import BotaoPagamentos from "../BotaoPagamento";

const Pagamento = () => {
  return (
    <PagamentosContainer>
      <button className="metodo">
        <CardIcon />
        **** **** **** 2498
        <BotaoPagamentos selecionado={"a"} />
      </button>

      <button className="metodo">
        <CardIcon />
        **** **** **** 5499
        <BotaoPagamentos selecionado={"b"} />
      </button>

      <button className="add">ADICIONAR CARTÃO</button>
    </PagamentosContainer>
  );
};

export default Pagamento;
