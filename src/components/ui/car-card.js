import { useNavigate } from "react-router-dom";
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

const CarCard = ({
  img1 = "https://www.razaoautomovel.com/wp-content/uploads/2021/11/Dacia-Duster-4x4-6-scaled_925x520_acf_cropped.jpg",
  img2 = "https://www.topgear.com/sites/default/files/2022/12/Dacia-Duster-on-road-058.jpg",
  brand = "Bugatti Chiron",
  model = "2017",
  price = "280",
  gearbox = "automatic",
  type = "petrol",
  available = "yes",
}) => {
    const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };
  return (
    <div className="vehicle-card">
      <div className="details">
        <div className="thumb-gallery">
          <Box bg="red.400" w="full" h="full">
            <Image
              className="first"
              objectFit="cover"
              h={"215px"}
              w={"full"}
              src={img1}
            ></Image>
            <Image
              className="second"
              objectFit="cover"
              h={"215px"}
              w={"full"}
              src={img2}
            ></Image>
          </Box>
        </div>

        <Box p={4}>
          <HStack alignItems="baseline" spacing={"auto"}>
            <Heading size={"md"} fontWeight="600">
              {brand}
            </Heading>
            <Heading size={"sm"} fontWeight="600">
              {model}
            </Heading>
          </HStack>
          <HStack py={3}>
            <Heading size={"md"} fontWeight="600" color="gray.600">
              ${price}
            </Heading>
            <Text color="gray.400">/day</Text>
          </HStack>
          <Button w="full" onClick={() => navigate("/rent")}>Rent now</Button>
          <Divider borderColor="gray.300" py={3} />

          <SimpleGrid columns={3} py={4} textAlign="center">
            <GridItem>
              <Heading fontWeight="400" color="gray.400" size="xs">
                Gearbox
              </Heading>
              <Text fontWeight="500" color="gray.600">
                {gearbox}
              </Text>
            </GridItem>
            <GridItem>
              <Heading fontWeight="400" color="gray.400" size="xs">
                Type
              </Heading>
              <Text fontWeight="500" color="gray.600">
                {type}
              </Text>
            </GridItem>
            <GridItem>
              <Heading fontWeight="400" color="gray.400" size="xs">
                Available
              </Heading>
              <Text fontWeight="500" color="gray.600">
                {available}
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

/*
https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2018-Bugatti-Chiron-119.jpg?crop=1xw:1xh;center,center&resize=480:*


https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2018-Bugatti-Chiron-117.jpg?crop=1xw:1xh;center,center&resize=480:*
*/


