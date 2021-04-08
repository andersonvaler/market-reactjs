import Product from "./components/Cards/Product";
import "./App.css";
import GlobalStyles from "./Global/globalStyles";

function App() {
  return (
    <div>
      <Product
        name="Product Name"
        imageUrl="https://picsum.photos/200/200"
        description="Peça frutas fresquinhas aqui todo dia com entrega grátis essa
        semana."
      />
      <GlobalStyles />
    </div>
  );
}

export default App;
