import { Container, Icon } from "./style";
import { FaSearch } from "react-icons/fa";

const Search = ({ children, handleFilter }) => {
  return (
    <>
      <Container>
        <Icon onClick={() => handleFilter()}>
          <FaSearch
            style={{
              fontSize: "1.2rem",
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
