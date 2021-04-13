import { useEffect } from "react";
import { useCarrinho } from "../../Providers/Carrinho";
import { useProdutos } from "../../Providers/ListaProdutos";
import { useUsuario } from "../../Providers/Usuario";

const Store = () => {
  const { produtos } = useProdutos();
  const { carrinho, setCarrinho } = useCarrinho();
  const { loadUser } = useUsuario();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const mudarQuantidade = (boleano) => {};
  return (
    <div>
      <h1>Store</h1>
      <div>
        {produtos.map((value, index) => {
          return (
            <div
              key={index}
              style={{ border: "1px black solid", margin: "5px 0" }}
            >
              <h2>Nome: {value.name}</h2>
              <p>Preço: {value.price}</p>
              <p>Categoria: {value.categoru}</p>
              <div>
                <button
                  style={{ marginRight: "5px" }}
                  onClick={() => mudarQuantidade(false)}
                >
                  Add Clicks
                </button>
                <p> Contador: {value.clicks}</p>
                <button onClick={() => mudarQuantidade(true)}>
                  Sub Clicks
                </button>
              </div>
              <button onClick={() => setCarrinho([...carrinho, value])}>
                Add Carrinho
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
