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
import { useNavigate } from "react-router-dom";

const CarCard = ({ props }) => {
  const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };
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
              src={`/images/back${props.id}.webp`}
            ></Image>
            <Image
              className="second"
              objectFit="cover"
              h={"215px"}
              w={"full"}
              src={`/images/front${props.id}.webp`}
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
            <Text color="gray.400">/day</Text>
          </HStack>
          <Button w="full" onClick={() => navigate(`/cars/${props.id}`)}>
            Rent now
          </Button>
          <Divider borderColor="gray.300" py={3} />

          <SimpleGrid columns={3} py={4} textAlign="center">
            <GridItem>
              <Heading fontWeight="400" color="gray.400" size="xs">
                Gearbox
              </Heading>
              <Text fontWeight="500" color="gray.600">
                {props.gearbox}
              </Text>
            </GridItem>
            <GridItem>
              <Heading fontWeight="400" color="gray.400" size="xs">
                Type
              </Heading>
              <Text fontWeight="500" color="gray.600">
                {props.fuel_type}
              </Text>
            </GridItem>
            <GridItem>
              <Heading fontWeight="400" color="gray.400" size="xs">
                Available
              </Heading>
              <Text fontWeight="500" color="gray.600">
                {props.available ? "yes" : "no"}
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
