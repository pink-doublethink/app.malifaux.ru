import { SidebarContainer } from "./Sidebar.styles";
import { MENU_ITEMS } from "../../data/menu-items";
import MenuItemsList from "../MenuItemsList";

type SidebarProps = {
  isOpened: boolean;
};
export default function Sidebar({ isOpened }: SidebarProps) {
  return (
    <SidebarContainer isOpened={isOpened}>
      <MenuItemsList options={MENU_ITEMS} />
    </SidebarContainer>
  );
}
