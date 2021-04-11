import { Container, Input, Icon } from "./style";
import { FaSearch } from "react-icons/fa";

const Search = () => {
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
        <Input placeholder="Procurar"></Input>
      </Container>
    </>
  );
};

export default Search;
