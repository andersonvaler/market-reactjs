import Product from "./Components/Cards/Product";
import "./App.css";
import GlobalStyles from "./Global/globalStyles";
import Routes from "./Routes";
import PerfilUser from "./components/PerfilUser";

const App = () => {
  return (
    <div>
      <Product
        name="Frutas"
        imageUrl="https://picsum.photos/200/200"
        description="Peça frutas fresquinhas aqui todo dia com entrega grátis essa
        semana."
      />
      <Routes />
      <GlobalStyles />
      <PerfilUser />
    </div>
  );
};

export default App;
