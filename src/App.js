import Product from "./components/Cards/Product";
import "./App.css";
import GlobalStyles from "./Global/globalStyles";
import Store from "./components/Cards/Store";

function App() {
  return (
    <div>
      <Product
        name="Product Name"
        imageUrl="https://picsum.photos/200/200"
        description="Peça frutas fresquinhas aqui todo dia com entrega grátis essa
        semana."
      />
      <Store
        name="Market Name"
        imageUrl="https://picsum.photos/300/300"
        description="Sua marca preferida, venha conferir nossas promoções"
      />
      <GlobalStyles />
    </div>
  );
}

export default App;
