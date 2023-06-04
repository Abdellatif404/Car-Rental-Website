import { Container, Flex } from "@chakra-ui/react";
import NavbarLinks from "./NavbarLinks";

const Navbar = ({ sidebarContent, links, buttons }) => {
  return (
    <Container maxWidth="1720px" px={[8, 8, 8]}>
      <nav className="navbar navbar-expand-lg my-3">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          bg="white"
          borderColor="blackAlpha.300"
          h="14"
        >
          {sidebarContent}
            {links}
            {buttons}
        </Flex>
      </nav>
    </Container>
  );
};

export default Navbar;

/*

<Container maxWidth="1720px" px={[12, 8, 8]}>
      <nav className="navbar navbar-expand-lg my-3">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="0"
          bg="white"
          borderBottomWidth="1px"
          borderColor="blackAlpha.300"
          h="14"
        >
          {sidebarContent}

          <NavbarLinks />
          {buttons}
        </Flex>
      </nav>
    </Container>

*/
