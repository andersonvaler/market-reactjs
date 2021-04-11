import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import { CircleContainer } from "./style";
import { useState } from "react";

const ButtonRadio = withStyles({
  root: {
    color: "#380f52",
    "&$checked": {
      color: "#0EC977",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const BotaoPagamentos = ({ selecionado }) => {
  const [valorSelecionado, setValorSelecionado] = useState();

  const handleChange = (event) => {
    setValorSelecionado(event.target.value);
  };

  return (
    <CircleContainer>
      <ButtonRadio
        checked={valorSelecionado === selecionado}
        onChange={handleChange}
        value={selecionado}
        name="radio-button-demo"
        inputProps={{ "aria-label": `${selecionado}` }}
      />
    </CircleContainer>
  );
};

export default BotaoPagamentos;
