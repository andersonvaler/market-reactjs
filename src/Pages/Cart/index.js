import { useHistory } from "react-router";
import { useCarrinho } from "../../Providers/Carrinho";
import { useToken } from "../../Providers/Token";
import api from "../../services/api";
import { useGlobal } from "../../Providers/Global";
import { useEffect } from "react";
import { useUsuario } from "../../Providers/Usuario";
import ProdutoCarrinho from "../../Components/Cards/ProdutoCarrinho";
import { DivProdutos, MainContainer, CartFooter } from "./style";
import { Button } from "../../Components/Button/PrimaryButton/style";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const { token } = useToken();
  const { carrinho, setCarrinho } = useCarrinho();
  const { isStore, usuario } = useUsuario();
  const history = useHistory();
  const { global } = useGlobal();
  let contador = 0;

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    if (isStore) {
      history.push("/dashboard/store");
    }
    // eslint-disable-next-line
  }, [isStore, global]);

  const sendCart = () => {
    const { name, adress, id, number } = usuario;
    const data = {
      name: name,
      adress: adress,
      userId: id,
      number: number,
      isOrder: false,
      confirmed: false,
      available: true,
      products: carrinho,
      stores: [],
    };
    api
      .post(
        "order",
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setCarrinho([]);
        localStorage.setItem("carrinho", JSON.stringify([]));
        history.push("/checkout");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const adiciona = () =>
    toast.success("item adicionado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const remove = () =>
    toast.success("item removido", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const dell = () =>
    toast.success("item deletado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div>
      <ToastContainer />
      <Header />
      <MainContainer>
        <section onClick={() => history.push("/products")}>
          Ver mais produtos
        </section>
        <h3>Adicione ou Remova itens e prossiga para o or??amento</h3>
        <DivProdutos>
          {carrinho &&
            carrinho.map((produto, index) => {
              contador += produto.quantity;
              return (
                <ProdutoCarrinho
                  produto={produto}
                  index={index}
                  contador={contador}
                  dell={dell}
                  adiciona={adiciona}
                  remove={remove}
                />
              );
            })}
          {carrinho.length < 1 && <h1>Carrinho vazio!</h1>}
        </DivProdutos>
      </MainContainer>
      <CartFooter>
        {carrinho.length > 0 && <p>Itens: {contador}un</p>}
        <Button
          onClick={() => sendCart()}
          disabled={carrinho.length < 1 && "disabled"}
        >
          Solicitar Or??amento
        </Button>
      </CartFooter>
      <Footer />
    </div>
  );
};

export default Cart;
