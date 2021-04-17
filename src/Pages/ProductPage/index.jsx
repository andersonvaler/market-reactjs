import { ProdutosContainer } from "./style";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Search from "../../Components/Search";
import Product from "../../Components/Cards/Product/index";
import SelectCategory from "../../Components/SelectCategory";
import { useProdutos } from "../../Providers/ListaProdutos";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUsuario } from "../../Providers/Usuario";

const Products = () => {
  const { produtos } = useProdutos();
  const [filter, setFilter] = useState();
  const [filtered, setFiltered] = useState(produtos);
  // const [page, setPage] = useState(1);
  const { isStore } = useUsuario();
  const history = useHistory();

  useEffect(() => {
    if (isStore) {
      history.push("/dashboard/store");
    }
    //eslint-disable-next-line
  }, [isStore]);

  const handleFilter = () => {
    setFiltered(
      produtos.filter(
        ({ name, description, category }) =>
          name.toUpperCase().includes(filter.toUpperCase()) ||
          description.toUpperCase().includes(filter.toUpperCase()) ||
          category.toUpperCase().includes(filter.toUpperCase())
      )
    );
    console.log("executou", filtered);
  };
  return (
    <ProdutosContainer>
      <Header />

      <div className="produtos-pesquisa">
        <Search handleFilter={() => handleFilter()}>
          <input
            placeholder="Procurar"
            onChange={(e) => setFilter(e.target.value)}
          ></input>
        </Search>
      </div>

      <div className="produtos-categorias">
        <SelectCategory />
      </div>
      {filtered.length < 1 && "Nenhum produto encontrado para sua pesquisa"}
      <div className="produtos-cards">
        {filtered.length > 0
          ? filtered.map((produto, index) => (
              <Product produto={produto} key={index} />
            ))
          : produtos.map((produto, index) => (
              <Product produto={produto} key={index} />
            ))}
      </div>

      {/* <PaginationContainer
        count={2}
        page={page}
        onChange={handleChange}
        shape="rounded"
      /> */}
      <Footer />
    </ProdutosContainer>
  );
};

export default Products;
