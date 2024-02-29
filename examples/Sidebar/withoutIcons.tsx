const code = `
import { Sidebar, useBoolean, SidebarItem } from "pol-ui";
 
export const SidebarComponent = (): JSX.Element => {
  const { value, toggle } = useBoolean(false);

  return (
    <Sidebar  open={value} toggle={toggle}>
    <SidebarItem href="#">Dashboard</SidebarItem>
      <SidebarItem href="#" labelColor="alternative">
        Kanban
      </SidebarItem>
      <SidebarItem href="#">At</SidebarItem>
      <SidebarItem href="#">Users</SidebarItem>
      <SidebarItem href="#">Notifications</SidebarItem>
      <SidebarItem href="#">Settings</SidebarItem>
    </Sidebar>
  );
};
`;
export default code;
