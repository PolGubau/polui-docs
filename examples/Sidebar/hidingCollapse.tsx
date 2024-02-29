const code = `
import { Sidebar, useBoolean, SidebarItem } from "pol-ui";
import { TbLayout, TbLayoutKanban, TbAt, TbUser, TbCoin } from "react-icons/tb";

export const SidebarComponent = (): JSX.Element => {
  const { value, toggle } = useBoolean(false);

  return (
    <div className="flex gap-4 items-start">
      <Sidebar collapseMode="hide" open={value} toggle={toggle}>
        <SidebarItem href="#" icon={TbLayout}>
          Dashboard
        </SidebarItem>
        <SidebarItem href="#" icon={TbLayoutKanban}>
          Kanban
        </SidebarItem>
        <SidebarItem href="#" icon={TbAt} label="3">
          At
        </SidebarItem>
        <SidebarItem href="#" icon={TbUser}>
          Users
        </SidebarItem>
        <SidebarItem href="#" icon={TbCoin} label="Premium">
          Products
        </SidebarItem>
      </Sidebar>
      <div className="flex m-4">
        <Button onClick={toggle}>
          {value ? <TbArrowRight /> : <TbArrowLeft />}
        </Button>
      </div>
    </div>
  );
};
`;
export default code;
