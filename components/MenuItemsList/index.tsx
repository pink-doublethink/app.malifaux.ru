import { MenuItem as MenuItemType } from "../../data/menu-items";
import MenuItem from "../MenuItem";
import { ListContainer } from "./MenuItemsList.styles";

type MenuItemsListProps = {
  options: MenuItemType[];
};

export default function MenuItemsList({ options }: MenuItemsListProps) {
  return (
    <ListContainer>
      {options.map((option) => (
        <MenuItem menuItem={option} key={option.id} />
      ))}
    </ListContainer>
  );
}