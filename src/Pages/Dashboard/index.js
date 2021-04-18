import { MainContainer } from "./style";
import Header from "../../Components/Header";
import StoreCard from "../../Components/Cards/StoreCard";
import Product from "../../Components/Cards/Product/index";
import Footer from "../../Components/Footer";
import { useHistory, useParams } from "react-router-dom";
// import CardIntroStore from "../../Images/MainBannerStore.png";
import { useMercados } from "../../Providers/ListaMercados";
import { useProdutos } from "../../Providers/ListaProdutos";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useUsuario } from "../../Providers/Usuario";
import Categoria from "../../Components/Cards/Categoria";
import carnes from "../../Images/carnes.jpg";
import frios from "../../Images/frios.jpg";
import hortifruti from "../../Images/hortifruti.jpg";
import higiene from "../../Images/higiene.jpg";
import limpeza from "../../Images/limpeza.jpg";
import mercearia from "../../Images/mercearia.jpg";

const Dashboard = () => {
  const { mercados } = useMercados();
  const { produtos } = useProdutos();
  const { isStore } = useUsuario();
  const { userType } = useParams();
  const history = useHistory();
  const store = userType === "store";

  useEffect(() => {
    if (store && !isStore) {
      history.push("/dashboard/user");
    }
    if (!store && isStore) {
      history.push("/dashboard/store");
    }

    //eslint-disable-next-line
  }, [isStore]);

  const categories = [
    {
      name: "Carnes",
      image: carnes,
      quantity: 30,
    },
    {
      name: "Frios",
      image: frios,
      quantity: 30,
    },
    {
      name: "Hortifruti",
      image: hortifruti,
      quantity: 30,
    },
    {
      name: "Limpeza",
      image: limpeza,
      quantity: 30,
    },
    {
      name: "Higiene",
      image: higiene,
      quantity: 30,
    },
    {
      name: "Mercearia",
      image: mercearia,
      quantity: 30,
    },
  ];

  return (
    <>
      <ToastContainer />
      <Header />
      <MainContainer>
        {userType === "user" && (
          <>
            {/* <img alt="" className="cardIntro" src={CardIntroUser} /> */}

            <h1>Lojas</h1>
            <h3>Encontre as melhores lojas e mercados</h3>
            <div className="lojas">
              {mercados &&
                mercados.map((mercado, index) => (
                  <StoreCard
                    name={mercado.name}
                    adress={mercado.adress}
                    key={index}
                    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtpaqHXNFVQIc-f5uMn2SI37D8LLkShXvwg&usqp=CAU"
                  />
                ))}
            </div>

            <h1>Produtos pedidos recentemente</h1>
            <h3>Selecione os melhores produtos aqui</h3>
            <div className="produtos">
              {produtos &&
                produtos.map(
                  (produto, index) =>
                    index < 6 && <Product produto={produto} key={index} />
                )}
            </div>
          </>
        )}
        {store && (
          <>
            <h1>Minhas categorias:</h1>
            <div className="categorias">
              {categories.map((category) => {
                return (
                  <div className="categoria">
                    <h3>{category.name}</h3>
                    <Categoria
                      quantity={category.quantity}
                      image={category.image}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
        <Footer />
      </MainContainer>
    </>
  );
};

export default Dashboard;
