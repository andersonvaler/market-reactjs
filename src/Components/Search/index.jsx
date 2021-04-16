import { Container, Input, Icon } from "./style";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Search = () => {
  const [busca, setBusca] = useState();
  return (
    <>
      <Container>
        <Icon>
          <FaSearch
            style={{
              fontSize: "1.8rem",
              color: "#380F52",
            }}
          />
        </Icon>
        <Input
          placeholder="Procurar"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        ></Input>
      </Container>
    </>
  );
};

export default Search;
