import { Box, Flex, Hide, Image } from "@chakra-ui/react";

const HomePageImage = () => {
  return (
    <Hide below="md">
      <Flex w={["50%", "50%", "70%"]} alignItems="center" position="relative">
        <Box
          position="absolute"
          alignItems="center"
          borderRadius="2xl"
          bg="var(--blue-gradient)"
          top={0}
          bottom={0}
          mx={"10"}
          w="90%"
          minW={"600px"}
        ></Box>
        <Image
          src="assets/images/ford.webp"
          top="10vh"
          position="absolute"
          minW={"730px"}
        />
      </Flex>
    </Hide>
  );
};

export default HomePageImage;
