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
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../components/ui/loading-spinner";
import { showToast } from "../components/toast-alert";

function Rent() {
  const navigation = useNavigate();
  const navigate = (route) => navigation(route);
  let params = useParams();
  const toast = useToast();
  const [car, setCar] = useState({});
  const [isLoading, setLoading] = useState(true);

  const rentalDate = useRef("");
  const returnDate = useRef("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/cars/${params.id}`)
      .then((response) => {
        setCar(response.data.data[0]);
        setLoading(false);
      });
  }, [params.id]);

  useEffect(() => {
    calculatePrice();
  }, []);

  const calculatePrice = () => {
    const rental_date = Date.parse(rentalDate.current.value);
    const return_date = Date.parse(returnDate.current.value);
    const now = new Date().getTime();

    const rentDuration = return_date - rental_date;
    if (rentalDate.current.value && returnDate.current.value) {
      if (rental_date < now || return_date < now) {
        setTotalPrice(0);
      } else if (rentDuration <= 0) {
        setTotalPrice(0);
      } else {
        const price = (rentDuration / (1000 * 60 * 60 * 24)) * car.price;
        setTotalPrice(price);
      }
    }
  };

  const handleRentalDateChange = () => {
    calculatePrice();
  };

  const handleReturnDateChange = () => {
    calculatePrice();
  };

  if (isLoading) return <LoadingSpinner />;

  function rentACar(e) {
    e.preventDefault();

    const rental_date = Date.parse(rentalDate.current.value);
    const return_date = Date.parse(returnDate.current.value);
    const now = new Date().getTime();
    const rentDuration = return_date - rental_date;

    if (rental_date < now || return_date < now) {
      console.log("Please select a valid rental and return dates.");
    } else if (rentDuration <= 0) {
      console.log("You can rent for 1 day at least.");
    } else {
      const price = (rentDuration / (1000 * 60 * 60 * 24)) * car.price;

      const rent = {
        rental_date: rentalDate.current.value,
        return_date: returnDate.current.value,
        price: price,
        user_id: localStorage.getItem("id"),
        car_id: params.id,
      };
      console.log(rent);
      if (rentalDate.current.value != "" && returnDate.current.value != "") {
        axios
          .post("http://127.0.0.1:8000/api/rents", rent)
          .then((response) => {
            showToast(
              toast,
              "Rent created successfully!",
              "success",
              "Success"
            );
            navigate("/cars");
          })
          .catch((error) => {
            showToast(toast, "Creating a rent failed", "error", "Error");
            console.error("Error creating rent:", error);
          });
      }
    }
  }

  return (
    <Center h={"100vh"} m={["5%", "10%", "12%", "13%", "0%"]}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        boxShadow="2xl"
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

            <FormLabel fontWeight="600" color="gray.600">
              Rental date
            </FormLabel>
            <Input
              type={"date"}
              ref={rentalDate}
              onChange={handleRentalDateChange}
            />
            <FormLabel fontWeight="600" color="gray.600">
              Return date
            </FormLabel>
            <Input
              type={"date"}
              ref={returnDate}
              onChange={handleReturnDateChange}
            />

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
              <Text fontWeight="600" color="gray.600">
                Total
              </Text>
              <Spacer />
              <Text
                color="gray.600"
                fontSize="2xl"
                fontWeight={["bold", "extrabold"]}
              >
                ${totalPrice.toFixed(2)}
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
