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
  SimpleGrid,
  GridItem,
  Divider,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../components/ui/loading-spinner";

function Rent() {
  const navigation = useNavigate();
  const navigate = (route) => navigation(route);
  let params = useParams();
  const [car, setCar] = useState({});
  const [isLoading, setLoading] = useState(true);

  const rentalDate = useRef();
  const returnDate = useRef();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/cars/${params.id}`)
      .then((response) => {
        setCar(response.data.data[0]);
        setLoading(false);
      });
  }, [params.id]);

  if (isLoading) return <LoadingSpinner />;

  function rentACar(e) {
    e.preventDefault();

    const rentDuration =
      Date.parse(returnDate.current.value) -
      Date.parse(rentalDate.current.value);

    if (rentDuration <= 0) {
      //console.log("You can rent for 1 day at least.");
    } else {
      //console.log(`OK, you are renting for ${rentDuration / 1000 / 60 / 60 / 24} days`);
    }
  }

  return (
    <Center h={"100vh"} m={["5%", "10%", "12%", "13%", "0"]}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        boxShadow="xl"
        h={"auto"}
        w={"80%"}
        borderRadius="15px"
        overflow={"hidden"}
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <Image src={car.photo2} objectFit="cover" h={"full"}></Image>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }} p={"5%"} bg={"white"} h={"full"}>
          <VStack alignItems={"center"} spacing={"3"}>
            <Heading fontWeight={"500"}>{car.brand}</Heading>

            <FormLabel fontWeight="600" color="gray.600">Rental date</FormLabel>
            <Input type={"date"} ref={rentalDate} />
            <FormLabel fontWeight="600" color="gray.600">Return date</FormLabel>
            <Input type={"date"} ref={returnDate} />

            <Divider borderColor="gray.300" py={3} />
            <SimpleGrid w={"full"} columns={3} py={3} textAlign="center">
            <GridItem>
              <Heading fontWeight="500" color="gray.400" size="xs">
                Gearbox
              </Heading>
              <Text fontWeight="600" color="gray.600">
                {car.gearbox}
              </Text>
            </GridItem>
            <GridItem>
              <Heading fontWeight="500" color="gray.400" size="xs">
                Type
              </Heading>
              <Text fontWeight="600" color="gray.600">
                {car.fuel_type}
              </Text>
            </GridItem>
            <GridItem>
              <Heading fontWeight="500" color="gray.400" size="xs">
                Available
              </Heading>
              <Text fontWeight="600" color="gray.600">
                {car.available ? "yes" : "no"}
              </Text>
            </GridItem>
          </SimpleGrid>
          <Divider borderColor="gray.300" py={0} />

            <HStack w={"full"} justify={"space-between"}>
              <Text fontWeight="600" color="gray.600">Total</Text>
              <Spacer />
              <Text
                color="gray.600"
                fontSize="2xl"
                fontWeight={["bold", "extrabold"]}
              >
                ${car.price}.00
              </Text>
              <Text ml={2} fontSize="xl" fontWeight="medium" color="gray.500">
                USD
              </Text>
            </HStack>
            <Button onClick={rentACar} w={"full"}>
              Confirm rent
            </Button>
          </VStack>
        </Box>
      </Stack>
    </Center>
  );
}

export default Rent;
