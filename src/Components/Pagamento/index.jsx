import { PagamentosContainer, CardIcon, DeleteButton } from "./style";
/* import BotaoPagamentos from "../BotaoPagamento"; */

const Pagamento = () => {
  return (
    <PagamentosContainer>
      <button className="metodo">
        <CardIcon />
        **** **** **** 2498
        <DeleteButton>X</DeleteButton>
        {/* <BotaoPagamentos selecionado={"a"} /> */}
      </button>

      <button className="metodo">
        <CardIcon />
        **** **** **** 5499
        <DeleteButton>X</DeleteButton>
        {/* <BotaoPagamentos selecionado={"b"} /> */}
      </button>

      <button className="metodo">
        <CardIcon />
        **** **** **** 3844
        <DeleteButton>X</DeleteButton>
        {/* <BotaoPagamentos selecionado={"c"} /> */}
      </button>

      <button className="metodo">
        <CardIcon />
        **** **** **** 3874
        <DeleteButton>X</DeleteButton>
        {/* <BotaoPagamentos selecionado={"d"} /> */}
      </button>

      <button className="metodo">
        <CardIcon />
        **** **** **** 1244
        <DeleteButton>X</DeleteButton>
        {/* <BotaoPagamentos selecionado={"e"} /> */}
      </button>

      <button className="add">ADICIONAR CARTÃO</button>
    </PagamentosContainer>
  );
};

export default Pagamento;
