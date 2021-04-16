import {
  SelectionListContainer,
  ListItemContainer,
  CheckIcon,
  MoneyIcon,
} from "./style";
import { useState } from "react";

const SelectCategory = ({ selecionado = false }) => {
  const category = [
    "Carnes",
    "Frios",
    "Hortifruti",
    "Limpeza",
    "Higiene",
    "Mercearia",
  ];
  const [selected, setSelected] = useState("");

  const handleSelect = (selection) => {
    setSelected(selection);
  };

  return (
    <SelectionListContainer>
      {category.map((categoryName, index) =>
        selected === categoryName ? (
          <ListItemContainer
            key={index}
            onClick={() => handleSelect(categoryName)}
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
