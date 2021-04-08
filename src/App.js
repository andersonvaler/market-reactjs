import Product from "./Components/Cards/Product";
import "./App.css";
import GlobalStyles from "./Global/globalStyles";
import Routes from "./Routes";
import RegisterUser from "./components/cardRegister";
import RegisterCommerce from "./components/cardRegisterCommerce";
import Register from "./Pages/Register";

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
      <RegisterUser />
      <RegisterCommerce />
      <GlobalStyles />
    </div>
  );
};

export default App;
