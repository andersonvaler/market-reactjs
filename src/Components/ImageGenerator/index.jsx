import Hortifruti from "../../Images/hortifruti.jpg";
import Carnes from "../../Images/carnes.jpg";
import Frios from "../../Images/frios.jpg";
import Higiene from "../../Images/higiene.jpg";
import Limpeza from "../../Images/limpeza.jpg";
import Mercearia from "../../Images/mercearia.jpg";

const ImageGenerator = ({ category, productName }) => {
  return (
    <>
      {category === "hortifruti" && <img src={Hortifruti} alt={productName} />}
      {category === "carnes" && <img src={Carnes} alt={productName} />}
      {category === "frios" && <img src={Frios} alt={productName} />}
      {category === "higiene" && <img src={Higiene} alt={productName} />}
      {category === "limpeza" && <img src={Limpeza} alt={productName} />}
      {category === "mercearia" && <img src={Mercearia} alt={productName} />}
    </>
  );
};

export default ImageGenerator;
