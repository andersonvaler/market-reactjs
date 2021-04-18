import Hortifruti from "../../Images/hortifruti.jpg";
import Carnes from "../../Images/carnes.jpg";
import Frios from "../../Images/frios.jpg";
import Higiene from "../../Images/higiene.jpg";
import Limpeza from "../../Images/limpeza.jpg";
import Mercearia from "../../Images/mercearia.jpg";
import { Image } from "./style";

const ImageGenerator = ({ category, productName }) => {
  return (
    <>
      {category === "hortifruti" && (
        <Image src={Hortifruti} alt={productName} />
      )}
      {category === "carnes" && <Image src={Carnes} alt={productName} />}
      {category === "frios" && <Image src={Frios} alt={productName} />}
      {category === "higiene" && <Image src={Higiene} alt={productName} />}
      {category === "limpeza" && <Image src={Limpeza} alt={productName} />}
      {category === "mercearia" && <Image src={Mercearia} alt={productName} />}
    </>
  );
};

export default ImageGenerator;
