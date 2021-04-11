import {
  SelectionListContainer,
  ListItemContainer,
  CheckIcon,
  PayIcon,
  MoneyIcon,
} from "./style";
import { useState } from "react";

const SelectItem = ({ bankAccount = false }) => {
  const card = [
    "**** **** **** 0000",
    "**** **** **** 0001",
    "**** **** **** 0002",
  ];
  const [selected, setSelected] = useState("");

  const handleSelect = (selection) => {
    setSelected(selection);
  };

  return (
    <SelectionListContainer>
      {card.map((cardNum, index) =>
        selected === cardNum ? (
          <ListItemContainer
            key={index}
            onClick={() => handleSelect(cardNum)}
            selected
          >
            <CheckIcon />
            {bankAccount ? <MoneyIcon selected /> : <PayIcon selected />}
            {cardNum}
          </ListItemContainer>
        ) : (
          <ListItemContainer key={index} onClick={() => handleSelect(cardNum)}>
            {bankAccount ? <MoneyIcon /> : <PayIcon />}
            {cardNum}
          </ListItemContainer>
        )
      )}
    </SelectionListContainer>
  );
};

export default SelectItem;
