import {
  SelectionListContainer,
  ListItemContainer,
  CheckIcon,
  MoneyIcon,
} from "./style";

const SelectCategory = ({
  handleDisselect,
  handleSelect,
  categorySelection,
  selecionado = false,
}) => {
  const category = [
    "Carnes",
    "Frios",
    "Hortifruti",
    "Limpeza",
    "Higiene",
    "Mercearia",
  ];

  return (
    <SelectionListContainer>
      {category.map((categoryName, index) =>
        !!categorySelection[0] && categorySelection.includes(categoryName) ? (
          <ListItemContainer
            key={index}
            onClick={() => handleDisselect(categoryName)}
            selected
          >
            <CheckIcon />
            {selecionado && <MoneyIcon selected />}
            {categoryName}
          </ListItemContainer>
        ) : (
          <ListItemContainer
            key={index}
            onClick={() => handleSelect(categoryName)}
          >
            {selecionado && <MoneyIcon />}
            {categoryName}
          </ListItemContainer>
        )
      )}
    </SelectionListContainer>
  );
};

export default SelectCategory;
