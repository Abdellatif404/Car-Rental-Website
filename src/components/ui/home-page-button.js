import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HomePageButton = () => {
  const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };
  return (
    <Button
      onClick={() => navigate("/cars")}
      _hover={{
        transition: "background-color 0.3s linear",
        bg: "orange",
        color: "white",
      }}
      transition="background-color 0.2s linear"
      w="60%"
      fontSize="16px"
      fontWeight="500"
      color="gray.600"
      bg={"gray.50"}
      boxShadow="0px 5px 8px 0px rgba(0,0,0, 0.1)"
      borderRadius="50px"
      py="27px"
    >
      Book online now!
    </Button>
  );
};

export default HomePageButton;
