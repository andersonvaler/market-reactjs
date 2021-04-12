import { Art, ButtonClient, ButtonStore, Container, Msg } from "./style";
import { AiOutlineCheck } from "react-icons/ai";
import { MdStoreMallDirectory } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import FullLogo from "../../Logo/FullLogo";

const CardHome = () => {
  const history = useHistory();

  return (
    <Container>
      <FullLogo />
      <Art>
        <MdStoreMallDirectory className="ico" />
        <span />
        <AiOutlineCheck className="checked" />
        <span />
        <BsFillPersonFill className="ico" />
      </Art>
      <Msg>
        Cadastre-se como Mercado ou Usuário e tenha acesso a uma variedade de
        produtos e clientes.
      </Msg>
      <ButtonClient onClick={() => history.push("/login/user")}>
        Sou cliente
      </ButtonClient>
      <ButtonStore onClick={() => history.push("/login/store")}>
        Sou Loja
      </ButtonStore>
    </Container>
  );
};

export default CardHome;
