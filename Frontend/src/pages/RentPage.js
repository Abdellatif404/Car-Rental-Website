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
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Rent() {
  const [car, setCar] = useState({});
  const [isLoading, setLoading] = useState(true);
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/rent/${params.id}`)
      .then(function (res) {
        setCar(res.data.data[0]);
        setLoading(false);
      })
      .catch(function (error) {});
  }, []);

  if (isLoading) {
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        Loading...
      </Center>
    );
  }

  return (
    <Center h={"100vh"} m={["5%", "10%", "12%", "13%", "0"]}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        boxShadow="xl"
        h={{ base: "auto", lg: "400px" }}
        borderRadius="15px"
        overflow={"hidden"}
      >
        j
        <Box w={{ base: "100%", lg: "50%" }}>
          <Image src={car.photo2} objectFit="cover" h={"full"}></Image>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }} p={"5%"} bg={"white"} h={"full"}>
          <VStack alignItems={"start"} spacing={"3"}>
            <Heading fontWeight={"400"}>{car.brand}</Heading>
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
