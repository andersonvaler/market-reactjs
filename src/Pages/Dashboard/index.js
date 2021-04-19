import { MainContainer, LoadingDiv, SpinStyled } from "./style";
import Header from "../../Components/Header";
import StoreCard from "../../Components/Cards/StoreCard";
import Product from "../../Components/Cards/Product/index";
import Footer from "../../Components/Footer";
import { useHistory, useParams } from "react-router-dom";
import { useMercados } from "../../Providers/ListaMercados";
import { useProdutos } from "../../Providers/ListaProdutos";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useUsuario } from "../../Providers/Usuario";
import Categoria from "../../Components/Cards/Categoria";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const { mercados } = useMercados();
  const { isStore } = useUsuario();
  const [loading, setLoading] = useState(isStore ? false : true);
  const { produtos } = useProdutos();
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

    if (loading) {
      setTimeout(() => setLoading(false), 1000);
    }

    //eslint-disable-next-line
  }, [isStore]);

  const categories = [
    {
      category: "Carnes",
      produtos:
        produtos && produtos.filter((produto) => produto.category === "carnes"),
    },
    {
      category: "Frios",
      produtos:
        produtos && produtos.filter((produto) => produto.category === "frios"),
    },
    {
      category: "Hortifruti",
      produtos:
        produtos &&
        produtos.filter((produto) => produto.category === "hortifruti"),
    },
    {
      category: "Limpeza",
      produtos:
        produtos &&
        produtos.filter((produto) => produto.category === "limpeza"),
    },
    {
      category: "Higiene",
      produtos:
        produtos && produtos.filter((produto) => produto.category === "carnes"),
    },
    {
      category: "Mercearia",
      produtos:
        produtos &&
        produtos.filter((produto) => produto.category === "mercearia"),
    },
  ];

  return (
    <>
      {loading && (
        <LoadingDiv>
          <SpinStyled />
        </LoadingDiv>
      )}
      <ToastContainer />
      <Header />
      <MainContainer>
        {userType === "user" && (
          <>
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

            <h1>Produtos mais pedidos</h1>
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
              {categories.map((category, index) => {
                return (
                  <div className="categoria" key={index}>
                    <h3>{category.category}</h3>
                    <Categoria
                      category={category.category}
                      produtos={category.produtos}
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
