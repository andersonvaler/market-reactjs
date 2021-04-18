import { Container, Icon, SearchIcon } from "./style";

const Search = ({ children, handleFilter }) => {
  return (
    <>
      <Container>
        <Icon onClick={() => handleFilter()}>
          <SearchIcon />
        </Icon>
        {children}
      </Container>
    </>
  );
};

export default Search;
