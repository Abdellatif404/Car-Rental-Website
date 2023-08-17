import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePageButton = () => {
  const { t } = useTranslation();
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
      {t("homePageText.button")}
    </Button>
  );
};

export default HomePageButton;
