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

const Product = ({ name, imageUrl, description }) => {
  return (
    <div>
      <Container>
        <ProductInfo>
          <ProductHeader>
            <ProductName>{name}</ProductName>
            <RiInformationFill
              style={{
                fontSize: "1.6rem",
                color: "#380F52",
                cursor: "pointer",
              }}
            />
          </ProductHeader>
          <Description>{description}</Description>
          <Button>Pedir Agora</Button>
        </ProductInfo>
        <ProductImg>
          <img src={imageUrl} alt="product" />
        </ProductImg>
      </Container>
    </div>
  );
};

export default Product;
