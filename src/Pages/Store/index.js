import { useEffect } from "react";
// import { useProdutos } from "../../Providers/ListaProdutos";
import { useUsuario } from "../../Providers/Usuario";
// import { useHistory } from "react-router";

// import Product from "../../Components/Cards/Product";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const Store = () => {
  // const { produtos } = useProdutos();
  const { loadUser } = useUsuario();
  // const history = useHistory();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default Store;
