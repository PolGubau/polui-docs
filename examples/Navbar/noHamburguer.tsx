const code = `
import { Navbar,DropdownItem,Dropdown } from "pol-ui";
const Tab = () => (
  <div className="h-64 w-96 grid place-items-center">Some fancy lists</div>
);
const NavbarComponent = () => {
  return (
    <Navbar
    hasHambuguer={false}
      leftContent={
        <img
          src="https://ui.polgubau.com/logo.png"
          className="h-6 sm:h-7"
          alt="Pol-ui Logo"
        />
      }
      rightContent={
        <div className="flex gap-3 md:order-2">
          <Dropdown
            label="User settings"
            trigger={
              <Avatar
                alt="User settings"
                img="https://avatars.githubusercontent.com/u/63197171?v=4"
              />
            }
          >
            <DropdownItem label="Profile" />
            <DropdownItem label="Settings" />
            <DropdownItem label="Logout" />
          </Dropdown>
        </div>
      }
      links={[
        { href: "#", label: "Home" },
        { href: "#", label: "About", content: <Tab /> },
        { href: "#", label: "Services", content: <Tab /> },
        { href: "#", label: "Pricing" },
        { href: "#", label: "Contact" },
      ]}
    />
  );
};
export default NavbarComponent;
`;
export default code;
