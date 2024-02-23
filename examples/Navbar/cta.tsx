const code = `
import { Navbar, Button } from "pol-ui";
const Tab = () => (
  <div className="h-64 w-96 grid place-items-center">Some fancy lists</div>
);
const NavbarComponent = () => {
  return (
    <Navbar
      leftContent={
        <img
          src="https://ui.polgubau.com/logo.png"
          className="h-6 sm:h-7"
          alt="Pol-ui Logo"
        />
      }
      rightContent={<Button>Get started</Button>}
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