import {
  Center,
  GridItem,
  SimpleGrid,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";
import CarCard from "../components/ui/car-card";
import Footer from "../components/navbar/Footer";

function BookCars() {
  const [cars, setCars] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/cars").then(function (response) {
      setCars(response.data.data);
      setLoading(false);
    });
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
    <>
      <Navbar>
        <ul className="navbar-nav login-buttons d-flex flex-row">
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/profile">
              <i className="fa fa-user fa-lg"></i>
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/login">
              <i className="logout-icon fa fa-sign-out fa-lg"></i>
            </Link>
          </li>
        </ul>
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
