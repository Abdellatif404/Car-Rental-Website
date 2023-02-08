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
            <Input type={"date"} ref={rentalDate} />
            <FormLabel>Return date</FormLabel>
            <Input type={"date"} ref={returnDate} />
            <HStack w={"full"} justify={"space-between"}>
              <Text>Total</Text>
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
