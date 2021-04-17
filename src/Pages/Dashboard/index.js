import { MainContainer } from "./style";
import Header from "../../Components/Header";
import StoreCard from "../../Components/Cards/StoreCard";
import Product from "../../Components/Cards/Product/index";
import Footer from "../../Components/Footer";
import { useHistory, useParams } from "react-router-dom";
import CardIntroStore from "../../Images/MainBannerStore.png";
import { useMercados } from "../../Providers/ListaMercados";
import { useProdutos } from "../../Providers/ListaProdutos";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useUsuario } from "../../Providers/Usuario";

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
                produtos.map((produto, index) => (
                  <Product produto={produto} key={index} />
                ))}
            </div>
          </>
        )}
        {store && (
          <>
            <div className="cardIntro">
              <img alt="" className="cardImage" src={CardIntroStore} />
            </div>

            <h1>Meus produtos</h1>
            <div className="categorias">
              <div className="categoriaDiv">
                <h3>Carnes</h3>
                <img
                  alt=""
                  className="categoria"
                  src="https://pastoextraordinario.com.br/wp-content/uploads/2019/07/Pasto-Extraordinario-Carnes-Premium-Nicho-Ou-Nova-Realidade-867x323.png"
                />
              </div>

              <div className="categoriaDiv">
                <h3>Frios</h3>
                <img
                  alt=""
                  className="categoria"
                  src="https://yata-apix-3b7803cb-fef9-4a2a-bbdf-f6351c752652.lss.locawebcorp.com.br/6f715130127e4a42b0e17483286be219.jpg"
                />
              </div>

              <div className="categoriaDiv">
                <h3>Hortfruit</h3>
                <img
                  alt=""
                  className="categoria"
                  src="https://i1.wp.com/chacarastrapasson.com.br/wp-content/uploads/2020/02/hortifruti.jpg?w=658&ssl=1"
                />
              </div>

              <div className="categoriaDiv">
                <h3>Limpeza</h3>
                <img
                  alt=""
                  className="categoria"
                  src="https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2020/09/top-banner-Lista-de-produtos-de-limpeza-que-nao-podem-faltar-na-sua-casa.jpg"
                />
              </div>
              <div className="categoriaDiv">
                <h3>Higiene</h3>
                <img
                  alt=""
                  className="categoria"
                  src="https://cdn.consumidormoderno.com.br/wp-content/uploads/2019/03/cosm%C3%A9ticos-e-higiene-pessoal-editado.jpg"
                />
              </div>
              <div className="categoriaDiv">
                <h3>Mercearia</h3>
                <img
                  alt=""
                  className="categoria"
                  src="https://www.guapposocorro.com.br/wp-content/uploads/2018/10/destaque-mercearia-e-emporio-oliveira-preto.jpg"
                />
              </div>
            </div>
          </>
        )}
        <Footer />
      </MainContainer>
    </>
  );
};

export default Dashboard;
