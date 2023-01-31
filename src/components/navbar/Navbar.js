import { Container } from "@chakra-ui/react";
import NavbarTogglerButton from "./navbar-toggler-button";
import NavbarLinks from "./NavbarLinks";

const Navbar = ({ children }) => {
  return (
    <Container maxWidth="1720px" px={[12, 8, 8]}>
      <nav className="navbar navbar-expand-lg mx-lg-5 mx-sm-5 mx-2 my-3">
        <NavbarTogglerButton />
        <NavbarLinks />
        {children}
      </nav>
    </Container>
  );
};

export default Navbar;
