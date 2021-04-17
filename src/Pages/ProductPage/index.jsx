import { ProdutosContainer, PaginationContainer } from "./style";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Search from "../../Components/Search";
import Product from "../../Components/Cards/Product/index";
import SelectCategory from "../../Components/SelectCategory";
import { useProdutos } from "../../Providers/ListaProdutos";
import { useState } from "react";

const Products = () => {
  const { produtos } = useProdutos();
  const [filter, setFilter] = useState();
  const [filtered, setFiltered] = useState(produtos);
  const [page, setPage] = useState(1);

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
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <ProdutosContainer>
      <Header />

      <div className="produtos-pesquisa">
        <h1>Produtos</h1>
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

      <div className="produtos-cards">
        {filtered.length < 1 && "Nenhum produto encontrado para sua pesquisa"}
        {filtered.length > 0
          ? filtered.map((produto, index) => (
              <Product produto={produto} key={index} />
            ))
          : produtos.map((produto, index) => (
              <Product produto={produto} key={index} />
            ))}
      </div>

      <PaginationContainer
        count={2}
        page={page}
        onChange={handleChange}
        shape="rounded"
      />
      <Footer />
    </ProdutosContainer>
  );
};

export default Products;
