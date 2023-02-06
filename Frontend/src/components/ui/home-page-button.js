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
        opacity: "0.9",
      }}
      w="60%"
      fontSize="16px"
      fontWeight="500"
      bg="orange"
      color="white"
      boxShadow="0px 5px 8px 0px rgba(0,0,0, 0.1)"
      borderRadius="50px"
      py="27px"
    >
      Book online now!
    </Button>
  );
};

export default HomePageButton;
