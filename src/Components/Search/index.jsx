import { Container, Icon } from "./style"; // , Input
import { FaSearch } from "react-icons/fa";
// import { useState } from "react";

const Search = ({ children, handleFilter }) => {
  // const [busca, setBusca] = useState();
  return (
    <>
      <Container>
        <Icon onClick={() => handleFilter()}>
          <FaSearch
            style={{
              fontSize: "1.8rem",
              color: "#380F52",
            }}
          />
        </Icon>
        {children}
      </Container>
    </>
  );
};

export default Search;
