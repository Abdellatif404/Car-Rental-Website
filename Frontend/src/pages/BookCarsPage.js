import {
  Box,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";
import CarCard from "../components/ui/car-card";
import Footer from "../components/footer";
import LoadingSpinner from "../components/ui/loading-spinner";
import SearchInput from "../components/search";
import AvatarMenu from "../components/navbar/avatar-menu";
import HomeSidebarContent from "../components/home-sidebar-content";
import NavbarLinks from "../components/navbar/NavbarLinks";
import SearchContext from "../SearchContext";

function BookCars() {
  //const { setIsLoggedIn } = useContext(AuthContext);
  const { searchResults, setSearchResults } = useContext(SearchContext);
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
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box flexGrow={1}>
        <Navbar
          sidebarContent={<HomeSidebarContent />}
          links={<NavbarLinks />}
          buttons={
            <>
              <SearchInput />
              <AvatarMenu />
            </>
          }
        />

        <VStack>
          <SimpleGrid
            columns={[1, 1, 2, 2, 3]}
            rowGap={6}
            columnGap={8}
            py={10}
          >
            {searchResults && searchResults.length > 0
              ? searchResults.map((car) => (
                  <GridItem key={car.id} colSpan={1}>
                    <CarCard props={car} />
                  </GridItem>
                ))
              : cars.map((car) => (
                  <GridItem key={car.id} colSpan={1}>
                    <CarCard props={car} />
                  </GridItem>
                ))}
          </SimpleGrid>
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}

export default BookCars;
