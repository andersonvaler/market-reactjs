import { Button } from "../../Button/PrimaryButton/style";
import { RiInformationFill } from "react-icons/ri";
import {
  Container,
  ProductInfo,
  ProductImg,
  ProductName,
  Description,
  ProductHeader,
} from "./style";

const Product = () => {
  return (
    <div>
      <Container>
        <ProductInfo>
          <ProductHeader>
            <ProductName>Product Name</ProductName>
            <RiInformationFill
              style={{ fontSize: "25px", color: "#380F52", cursor: "pointer" }}
            />
          </ProductHeader>
          <Description>
            Peça frutas fresquinhas aqui todo dia com entrega grátis essa
            semana.
          </Description>
          <Button>Pedir Agora</Button>
        </ProductInfo>
        <ProductImg>
          <img src="https://picsum.photos/200/200" alt="piscsum" />
        </ProductImg>
      </Container>
    </div>
  );
};

export default Product;
