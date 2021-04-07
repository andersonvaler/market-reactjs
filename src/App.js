import Product from "./Components/Cards/Product";
import "./App.css";
import GlobalStyles from "./Global/globalStyles";
import StoreCard from "./Components/Cards/StoreCard";
import Routes from "./Routes";

function App() {
  return (
    <div>
      <Product
        name="Product Name"
        imageUrl="https://picsum.photos/200/200"
        description="Peça frutas fresquinhas aqui todo dia com entrega grátis essa
        semana."
      />
      <StoreCard
        name="Supermercado do bairro"
        imageUrl="https://picsum.photos/300/300"
      />
      <Routes />
      <GlobalStyles />
    </div>
  );
}

export default App;
