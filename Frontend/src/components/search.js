import { SearchIcon, Icon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../SearchContext";
import axios from "axios";
import { useTranslation } from "react-i18next";

const SearchInput = ({ type }) => {
  const { t } = useTranslation();
  const { setSearchResults } = useContext(SearchContext);
  const [data, setData] = useState();

  useEffect(() => {
    let cancelRequest = false;

    const fetchData = async () => {
      if (["rents", "users", "cars"].includes(type)) {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/${type}`);
          if (!cancelRequest) {
            setData(response.data.data);
            setSearchResults([]);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();

    return () => {
      cancelRequest = true;
    };
  }, [type, setSearchResults]);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();

    let filteredResults = [];
    if (data) {
      if (type === "cars") {
        filteredResults = data.filter((item) =>
          item.brand.toLowerCase().includes(searchQuery)
        );
      } else if (type === "rents") {
        filteredResults = data.filter((item) => item.user_id === searchQuery);
      } else if (type === "users") {
        filteredResults = data.filter((item) =>
          item.email.toLowerCase().includes(searchQuery)
        );
      } else {
        filteredResults = [];
      }
    }
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
      <Input
        type="text"
        placeholder={t("searchInput")}
        onChange={handleSearch}
      />
    </InputGroup>
  );
};

export default SearchInput;
