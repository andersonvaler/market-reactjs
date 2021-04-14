import { Art, ButtonClient, ButtonStore, Container, Msg } from "./style";
import { AiOutlineCheck } from "react-icons/ai";
import { MdStoreMallDirectory } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const CardHome = () => {
  const history = useHistory();

  return (
    <Container>
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
        Tenho um negócio
      </ButtonStore>
    </Container>
  );
};

export default CardHome;
