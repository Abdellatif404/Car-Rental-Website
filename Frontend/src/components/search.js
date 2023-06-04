import { SearchIcon, Icon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup w={{ base: "full", sm: "full", md: "300px" }} ml={{ base: 5, sm: 5, md: "230px" }}>
      <InputLeftElement pointerEvents="none">
        <Icon as={SearchIcon} boxSize={3} />
      </InputLeftElement>
      <Input type="text" placeholder="Search ..." />
    </InputGroup>
  );
};

export default SearchInput;
