import Product from "./components/Cards/Product";
import "./App.css";
import GlobalStyles from "./Global/globalStyles";
import Store from "./components/Cards/Store";

function App() {
  return (
    <div>
      <Product
        name="Frutas"
        imageUrl="https://picsum.photos/200/200"
        description="Peça frutas fresquinhas aqui todo dia com entrega grátis essa
        semana."
      />
      <Store
        name="Supermercado do bairro"
        imageUrl="https://picsum.photos/300/300"
      />
      <GlobalStyles />
    </div>
  );
}

export default App;
