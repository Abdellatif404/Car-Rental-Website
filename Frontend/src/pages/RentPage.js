import {
  Center,
  FormLabel,
  Input,
  HStack,
  Box,
  Button,
  Image,
  VStack,
  Text,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";

function Rent() {
  return (
    <Center h={"100vh"} m={["5%", "10%", "12%", "13%", "0"]}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        boxShadow="xl"
        h={{ base: "auto", lg: "400px" }}
        borderRadius="15px"
        overflow={"hidden"}
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <Image
            src="https://img.autotrader.co.za/17873025"
            objectFit="cover"
            h={"full"}
          ></Image>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }} p={"5%"} bg={"white"} h={"full"}>
          <VStack alignItems={"start"} spacing={"3"}>
            <Heading fontWeight={"400"}>Cleo Sandero</Heading>
            <FormLabel>Rental date</FormLabel>
            <Input type={"date"} />
            <FormLabel>Return date</FormLabel>
            <Input type={"date"} />
            <HStack w={"full"} justify={"space-between"}>
              <Text>Total</Text>
              <Spacer />
              <Text
                color="gray.600"
                fontSize="2xl"
                fontWeight={["bold", "extrabold"]}
              >
                $500.00
              </Text>
              <Text ml={2} fontSize="xl" fontWeight="medium" color="gray.500">
                USD
              </Text>
            </HStack>
            <Button w={"full"}>Confirm rent</Button>
          </VStack>
        </Box>
      </Stack>
    </Center>
  );
}

export default Rent;
