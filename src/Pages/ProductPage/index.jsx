import { ProdutosContainer, PaginationContainer } from "./style";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Search from "../../Components/Search";
import Product from "../../Components/Cards/Product/index";
import SelectCategory from "../../Components/SelectCategory";
import { useState } from "react";

const Products = () => {
  const produto1 = {
    name: "Maçãs",
    description:
      "Peça frutas fresquinhas aqui todo dia com entrega grátis essa semana.",
    image:
      "https://conteudo.imguol.com.br/c/entretenimento/32/2018/01/18/maca-1516308281068_v2_1920x1279.jpg",
  };
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <ProdutosContainer>
      <Header />

      <div className="produtos-pesquisa">
        <h1>Produtos</h1>
        <Search />
      </div>

      <div className="produtos-categorias">
        <SelectCategory />
      </div>

      <div className="produtos-cards">
        <Product produto={produto1} />

        <Product produto={produto1} />

        <Product produto={produto1} />

        <Product produto={produto1} />
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
