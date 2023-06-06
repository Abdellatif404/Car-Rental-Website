import { SearchIcon, Icon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../SearchContext";
import axios from "axios";

const SearchInput = () => {
  const { setSearchResults } = useContext(SearchContext);
  const [cars, setCars] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/cars").then((response) => {
      setCars(response.data.data);
    });
  }, []);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    
      const filteredResults = cars.filter((car) =>
        car.brand.toLowerCase().includes(searchQuery)
      );
      setSearchResults(filteredResults);
    
  };

  return (
    <InputGroup
      w={{ base: "full", sm: "full", md: "300px" }}
      ml={{ base: 5, sm: 5, md: "230px" }}
    >
      <InputLeftElement pointerEvents="none">
        <Icon as={SearchIcon} boxSize={3} />
      </InputLeftElement>
      <Input type="text" placeholder="Search ..." onChange={handleSearch} />
    </InputGroup>
  );
};

export default SearchInput;
