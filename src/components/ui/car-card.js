import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

const CarCard = () => {
  return (
    <div className="vehicle-card">
      <div className="details">
        <div className="thumb-gallery">
          <Image
            className="first"
            src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2018-Bugatti-Chiron-119.jpg?crop=1xw:1xh;center,center&resize=480:*"
          ></Image>
          <Image
            className="second"
            src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2018-Bugatti-Chiron-117.jpg?crop=1xw:1xh;center,center&resize=480:*"
          ></Image>
        </div>
        <div className="info">
          <HStack spacing={"auto"}>
            <Heading size={"md"} fontWeight="600">
              Bugatti Chiron
            </Heading>
            <Heading size={"sm"} fontWeight="600">
              2017
            </Heading>
          </HStack>
          <HStack>
            <Text>
              $2,998,000<Text>/day</Text>
            </Text>
          </HStack>
          <Button w="full">Rent not</Button>

          <div className="specs">
            <div className="spec mpg">
              <span>EPA City/Hwy</span>
              <p>
                9/14
                <span />
                mpg
              </p>
            </div>
            <div className="spec mpg">
              <span>0-60</span>
              <p>
                2.3
                <span />
                sec
              </p>
            </div>
            <div className="spec mpg">
              <span>Horsepower</span>
              <p>
                1500
                <span />
                hp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
