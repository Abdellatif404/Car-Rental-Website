import OutlineButton from "../components/ui/outline-button";
import Navbar from "../components/navbar/Navbar";
import NavbarLoginButtons from "../components/navbar/navbar-login-buttons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Hide,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import FormButton from "../components/form/form-button";

function Home() {
  return (
    <>
      <Navbar>
        <NavbarLoginButtons />
      </Navbar>
      <Container maxWidth="1720px" px={[12, 8, 8]}>
        <Flex h="100vh" gap={5} direction={{ base: "column", md: "row" }}>
          <VStack
            alignItems="start"
            justifyContent="center"
            spacing={7}
            px={[0, 12, 4]}
            h="full"
            w="full"
          >
            <Heading size={["2xl", "3xl", "2xl"]}>
              <span>Rent a car</span> and find great deals with us
            </Heading>
            <Box pr={"10%"}>
              <Text>
                Choose from a collection of brand new cars, low prices are part
                of our every day offer.
              </Text>
            </Box>

            <Button
              _hover={{ opacity: "0.9" }}
              w="70%"
              fontSize="15px"
              fontWeight="400"
              color="white"
              bg="var(--orange-gradient)"
              borderRadius="50px"
              py="25px"
            >
              Book online now!
            </Button>
          </VStack>
          <Hide below="md">
            <Flex alignItems="center" position="relative">
              <Box
                position="absolute"
                alignItems="center"
                borderRadius="2xl"
                bg="var(--blue-gradient)"
                top={0}
                bottom={0}
                h={{ md: "600px", lg: "800" }}
                w="90%"
                right={0}
              ></Box>
              <Image
                src="assets/images/ford.webp"
                top="5vh"
                position="relative"
                maxW="50vw"
              />
            </Flex>
          </Hide>
        </Flex>
      </Container>
    </>
  );
}

export default Home;

/*

<Hide below="lg">
            <Flex alignItems="center" position="relative">
              <Box
                position="absolute"
                alignItems="center"
                borderRadius="2xl"
                bg="var(--blue-gradient)"
                top={0}
                bottom={0}
                h="100%"
                w="90%"
                right={0}
              ></Box>
              <Image
                src="assets/images/ford.webp"
                top="5vh"
                position="relative"
                maxW="50vw"
              />
            </Flex>
          </Hide>

*/
