import {
  Box,
  Flex,
  Container,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const BestSales = () => {
  return (
    <Box bg={"gray.50"} mt={4}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Best Sales</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Flex
          bg="#edf3f8"
          _dark={{
            bg: "#3e3e3e",
          }}
          p={50}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            w="xs"
            bg="white"
            _dark={{
              bg: "gray.800",
            }}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            mx="auto"
          >
            <Image
              w="full"
              h={56}
              fit="cover"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />

            <Box py={5} textAlign="center">
              <Link
                display="block"
                fontSize="2xl"
                color="gray.800"
                _dark={{
                  color: "white",
                }}
                fontWeight="bold"
              >
                John Doe
              </Link>
              <span
                fontSize="sm"
                color="gray.700"
                _dark={{
                  color: "gray.200",
                }}
              >
                Software Engineer
              </span>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default BestSales;
