import { SidebarContainer } from "./Sidebar.styles";

type SidebarProps = {
  isOpened: boolean;
};
export default function Sidebar({ isOpened }: SidebarProps) {
  return (
    <SidebarContainer isOpened={isOpened}>
      
    </SidebarContainer>
  );
}
