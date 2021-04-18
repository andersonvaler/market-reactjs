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
  const [filtered, setFiltered] = useState([]);
  const [categorySelection, setCategorySelection] = useState([]);
  const { isStore } = useUsuario();
  const history = useHistory();

  useEffect(() => {
    if (isStore) {
      history.push("/dashboard/store");
    }
    //eslint-disable-next-line
  }, [isStore]);

  const handleSearch = ({ charCode }) => {
    charCode === 13 && handleFilter();
  };

  const addCategorySelection = (selectedCategory) => {
    setFilter();
    if (filtered.length === produtos.length) {
      setFiltered([
        ...produtos.filter(({ category }) =>
          category.toUpperCase().includes(selectedCategory.toUpperCase())
        ),
      ]);
    }
    setFiltered([
      ...filtered,
      ...produtos.filter(({ category }) =>
        category.toUpperCase().includes(selectedCategory.toUpperCase())
      ),
    ]);
  };

  const removeCategorySelection = (selectedCategory) => {
    setFilter();
    setFiltered([
      ...filtered.filter(
        ({ category }) =>
          !category.toUpperCase().includes(selectedCategory.toUpperCase())
      ),
    ]);
  };

  const handleSelect = (category) => {
    setCategorySelection([...categorySelection, category]);
    addCategorySelection(category);
  };

  const handleDisselect = (category) => {
    setCategorySelection(
      categorySelection.filter((categoryName) => categoryName !== category)
    );
    removeCategorySelection(category);
  };

  const handleFilter = () => {
    setCategorySelection([]);
    filter &&
      setFiltered(
        produtos.filter(
          ({ name, description, category }) =>
            name.toUpperCase().includes(filter.toUpperCase()) ||
            description.toUpperCase().includes(filter.toUpperCase()) ||
            category.toUpperCase().includes(filter.toUpperCase())
        )
      );
  };
  return (
    <ProdutosContainer>
      <Header />

      <div className="produtos-pesquisa">
        <Search handleFilter={() => handleFilter()}>
          <input
            placeholder="Procurar"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            onKeyPress={(e) => handleSearch(e)}
          ></input>
        </Search>
      </div>

      <div className="produtos-categorias">
        <SelectCategory
          handleSelect={handleSelect}
          handleDisselect={handleDisselect}
          categorySelection={categorySelection}
        />
      </div>
      <div className="produtos-cards">
        {filtered.length > 0
          ? filtered.map((produto, index) => (
              <Product produto={produto} key={index} />
            ))
          : produtos.map((produto, index) => (
              <Product produto={produto} key={index} />
            ))}
      </div>
      <Footer />
    </ProdutosContainer>
  );
};

export default Products;
