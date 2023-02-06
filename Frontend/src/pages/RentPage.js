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
} from "@chakra-ui/react";

function Rent() {
  return (
    <Center h={"100vh"} position={"relative"}>
      <HStack
        position={"absolute"}
        boxShadow="xl"
        spacing={0}
        h={"400px"}
        borderRadius="15px"
        overflow={"hidden"}
      >
        <Box h={"full"} w={"50%"}>
          <Image
            src="https://img.autotrader.co.za/17873025"
            objectFit="cover"
            h={"full"}
            w={"full"}
          ></Image>
        </Box>
        <Box w={"50%"} p={"5%"} bg={"white"} h={"full"}>
          <VStack alignItems={"start"} spacing={"3"}>
            <Heading fontWeight={"400"}>Cleo Sandero</Heading>
            <FormLabel>Rental date</FormLabel>
            <Input type={"date"} />
            <FormLabel>Return date</FormLabel>
            <Input type={"date"} />
            <HStack>
              <Text>Your final price is: </Text>
              <Spacer />
              <Text
                color="gray.600"
                fontSize="2xl"
                fontWeight={["bold", "extrabold"]}
              >
                $500
              </Text>
              <Text ml={2} fontSize="xl" fontWeight="medium" color="gray.500">
                USD
              </Text>
            </HStack>
            <Button w={"full"}>Confirm rent</Button>
          </VStack>
        </Box>
      </HStack>
    </Center>
  );
}

export default Rent;
