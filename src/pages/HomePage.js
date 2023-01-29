import OutlineButton from "../components/ui/outline-button";
import Navbar from "../components/navbar/Navbar";
import NavbarLoginButtons from "../components/navbar/navbar-login-buttons";
import {
  Box,
  Container,
  Flex,
  Hide,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

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
            pb={0}
            h="full"
            w="full"
            columnGap={1}
          >
            <div className="title">
              <h1>
                <span>Rent a car</span> and find <br />
                great deals with us
              </h1>
              <Text>
                Choose from a collection of brand new cars,
                <br /> low prices are part of our every day offer.
              </Text>

              <OutlineButton />
            </div>
          </VStack>
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
        </Flex>
      </Container>
    </>
  );
}

export default Home;
/*<div className="shape"></div>*/

/*
<div className="car-shape">
            
              <Box
                borderRadius="md"
                bg="tomato"
                h="full"
                w="80%"
              >
                Button
              </Box>
              <img
                className="car img-responsive"
                src="assets/images/ford.png"
              />
            </div>
*/
