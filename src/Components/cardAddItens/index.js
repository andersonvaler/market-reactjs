import imagem from "./img3.png";
import { useState } from "react";
import { Container, StyledImage, Texto, ButtonAdd } from "./style";
import ModalCard from "../ModalCard";
import Modal from "./modal";

const CardAddItens = () => {
  const [open, setopen] = useState(false);
  return (
    <Container>
      <StyledImage src={imagem} alt=""></StyledImage>
      <Texto>Adicione mais produtos para o seu catálogo.</Texto>
      <ButtonAdd onClick={() => setopen(!open)}>adicionar</ButtonAdd>
      <ModalCard open={open} setOpen={setopen}>
        <Modal />
      </ModalCard>
    </Container>
  );
};
export default CardAddItens;
