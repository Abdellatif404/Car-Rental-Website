import {
  Button,
  Heading,
  HStack,
  Image,
  Text,
  Box,
  Divider,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CarCard = ({ props }) => {
  const { t } = useTranslation();
  const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };
  const photo1 = props.id <= 6 ? `/images/back${props.id}.webp` : props.photo1;
  const photo2 = props.id <= 6 ? `/images/front${props.id}.webp` : props.photo2;
  return (
    <div className="vehicle-card">
      <div className="details">
        <div className="thumb-gallery">
          <Box bg="gray.400" w="full" h="full">
            <Image
              className="first"
              objectFit="cover"
              h={"215px"}
              w={"full"}
              src={photo1}
            ></Image>
            <Image
              className="second"
              objectFit="cover"
              h={"215px"}
              w={"full"}
              src={photo2}
            ></Image>
          </Box>
        </div>

        <Box p={4}>
          <HStack alignItems="baseline" spacing={"auto"}>
            <Heading size={"md"} fontWeight="600">
              {props.brand}
            </Heading>
            <Heading size={"sm"} fontWeight="600">
              {props.model}
            </Heading>
          </HStack>
          <HStack py={3}>
            <Heading size={"md"} fontWeight="600" color="gray.600">
              ${props.price}
            </Heading>
            <Text color="gray.400">{t("carCard.perDay")}</Text>
          </HStack>
          <Button w="full" onClick={() => navigate(`/cars/${props.id}`)}>
            {t("carCard.rentNow")}
          </Button>
          <Divider borderColor="gray.300" py={3} />

          <SimpleGrid columns={3} py={4} textAlign="center">
            <GridItem>
              <Heading fontWeight="400" color="gray.400" size="xs">
                {t("carCard.gearbox")}
              </Heading>
              <Text fontWeight="500" color="gray.600">
                {props.gearbox === "automatic" || props.gearbox === "manuel"
                  ? t(`carCard.${props.gearbox.toLowerCase()}`)
                  : props.fuel_type}
              </Text>
            </GridItem>
            <GridItem>
              <Heading fontWeight="400" color="gray.400" size="xs">
                {t("carCard.type")}
              </Heading>
              <Text fontWeight="500" color="gray.600">
                {props.fuel_type === "petrol" || props.fuel_type === "diesel"
                  ? t(`carCard.${props.fuel_type.toLowerCase()}`)
                  : props.fuel_type}
              </Text>
            </GridItem>
            <GridItem>
              <Heading fontWeight="400" color="gray.400" size="xs">
                {t("carCard.available")}
              </Heading>
              <Text fontWeight="500" color="gray.600">
                {props.available === 1
                  ? t("carCard.yes")
                  : props.available === 0
                  ? t("carCard.no")
                  : props.available}
              </Text>
            </GridItem>
          </SimpleGrid>

          <Divider borderColor="gray.300" py={0} />
        </Box>
      </div>
    </div>
  );
};

export default CarCard;

CarCard.defaultProps = {
  img1: "",
  img2: "",
  brand: "Default brand",
  model: "0000",
  price: "000",
  gearbox: "---",
  type: "---",
  available: "---",
};
