import { Art, ButtonClient, ButtonStore, Container, Msg } from "./style";
import { AiOutlineCheck } from "react-icons/ai";
import { MdStoreMallDirectory } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
const CardHome = () => {
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
      <ButtonClient>Sou cliente</ButtonClient>
      <ButtonStore>Sou Loja</ButtonStore>
    </Container>
  );
};

export default CardHome;
