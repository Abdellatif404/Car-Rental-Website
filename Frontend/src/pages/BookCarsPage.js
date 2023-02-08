import { Button, GridItem, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";
import CarCard from "../components/ui/car-card";
import Footer from "../components/navbar/Footer";
import LoadingSpinner from "../components/ui/loading-spinner";


function BookCars() {
  const navigation = useNavigate();
  const navigate = (route) => navigation(route);
  const [cars, setCars] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/cars").then((response) => {
      setCars(response.data.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Navbar>
        <HStack position={"absolute"} right={0} top={3}>
          <Button
            color={"gray.600"}
            colorScheme={"blackAlpha"}
            variant="ghost"
            leftIcon={<MdAccountCircle color="gray" />}
            onClick={() => navigate("/profile")}
          >
            Profile
          </Button>
          <Button
            color={"gray.600"}
            colorScheme={"blackAlpha"}
            variant="ghost"
            leftIcon={<MdLogout color="gray" />}
            onClick={() => navigate("/login")}
          >
            Logout
          </Button>
        </HStack>
      </Navbar>

      <VStack>
        <SimpleGrid columns={[1, 1, 2, 2, 3]} rowGap={6} columnGap={8} p={10}>
          {cars.map((car) => {
            return (
              <GridItem key={car.id} colSpan={1}>
                <CarCard props={car} />
              </GridItem>
            );
          })}
        </SimpleGrid>
      </VStack>
      <Footer />
    </>
  );
}

export default BookCars;
