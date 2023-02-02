import { Container, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container
      bg={"gray.200"}
      minW={"full"}
      maxW={"6xl"}
      mt={4}
      py={8}
      align={"center"}
    >
      <Text>© Copyright. All rights reserved.</Text>
    </Container>
  );
};

export default Footer;