import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Image,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      bg={"gray.200"}
      color={"gray.700"}
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={"gray.300"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"} px={{ base: 0, sm: 0, md: 10 }}>
            <ListHeader>About LOCAVO </ListHeader>
            <Text fontSize="sm">
              a wide selection of vehicles, competitive prices to make your
              experience enjoyable.
            </Text>
          </Stack>
          <Stack align={"flex-start"} pl={{ base: 0, sm: 0, md: 10 }}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Install App</ListHeader>
            <Image
              src="images/appstore.png"
              alt="Download on the App Store"
              boxSize="130px"
              height="100%"
              objectFit="contain"
            />
            <Image
              src="images/playstore.png"
              alt="Get it on Google Play"
              boxSize="130px"
              height="100%"
              objectFit="contain"
            />
          </Stack>
        </SimpleGrid>
      </Container>
      <Container
        bg={"gray.200"}
        minW={"full"}
        maxW={"6xl"}
        py={8}
        align={"center"}
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={"gray.300"}
      >
        <Text>© Copyright. All rights reserved.</Text>
      </Container>
    </Box>
  );
};

export default Footer;
