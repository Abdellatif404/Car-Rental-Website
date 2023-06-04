import { Box, Flex, Icon, Stack, chakra } from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";

const Feature = (props) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          rounded="md"
          _light={{
            bg: "brand.500",
          }}
          color="black"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            h={10}
            w={10}
            rounded="10%"
            bg="blue.500"
            color="white"
          >
            {props.icon}
          </Box>
        </Flex>
      </Flex>
      <Box ml={4}>
        <chakra.dt
          fontSize="lg"
          fontWeight="medium"
          lineHeight="6"
          _light={{
            color: "gray.900",
          }}
        >
          {props.title}
        </chakra.dt>
        <chakra.dd
          mt={2}
          color="gray.500"
          _dark={{
            color: "gray.400",
          }}
        >
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

const WhyChooseUs = () => {
  return (
    <Flex p={5} w="auto" justifyContent="center" alignItems="center" bg="gray.50">
      <Box py={12} bg="gray.50" rounded="xl" >
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: 4,
            lg: 8,
          }}
        >
          <Box
            textAlign={{
              lg: "center",
            }}
          >
            <chakra.p
              mt={2}
              fontSize={{
                base: "3xl",
                sm: "4xl",
              }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              _light={{
                color: "gray.900",
              }}
            >
              Why Choose Us
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{
                lg: "auto",
              }}
              color="gray.500"
              _dark={{
                color: "gray.400",
              }}
            >
              Experience hassle-free car rentals with exceptional service and a
              wide selection of vehicles.
            </chakra.p>
          </Box>

          <Box mt={20}>
            <Stack
              spacing={{
                base: 10,
                md: 0,
              }}
              display={{
                md: "grid",
              }}
              gridTemplateColumns={{
                md: "repeat(2,1fr)",
              }}
              gridColumnGap={{
                md: 8,
              }}
              gridRowGap={{
                md: 10,
              }}
            >
              <Feature title="Wide Selection of Cars" icon={<FaCar />}>
                We offer a diverse range of cars to suit your needs and
                preferences. Whether you're looking for a compact car for city
                driving or a spacious SUV for a family trip, we have a wide
                selection of vehicles to choose from.
              </Feature>

              <Feature title="Competitive Prices" icon={<BiDollar />}>
                We provide competitive prices that fit your budget. Our
                transparent pricing ensures that you get the best value for your
                money without compromising on quality or service.
              </Feature>

              <Feature
                title="Easy Booking Process"
                icon={<AiOutlineSchedule />}
              >
                Our user-friendly online booking system makes it quick and
                convenient to reserve your desired car. With just a few clicks,
                you can easily select your pickup location, choose your
                preferred car, and book it for your desired dates.
              </Feature>

              <Feature title="Trust and Reliability" icon={<BsShieldLock />}>
                With years of experience in the car rental industry, we have
                established a reputation for trust and reliability. You can rely
                on us to provide quality vehicles, excellent service, and a
                seamless rental experience.
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default WhyChooseUs;
