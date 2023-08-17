import { Box, Flex, Stack, chakra } from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <Flex
      p={5}
      w="auto"
      justifyContent="center"
      alignItems="center"
      bg="gray.50"
    >
      <Box py={12} bg="gray.50" rounded="xl">
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
              {t("whyChooseUs.title")}
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
              {t("whyChooseUs.description")}
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
              <Feature
                title={t("whyChooseUs.features.0.title")}
                icon={<FaCar />}
              >
                {t("whyChooseUs.features.0.description")}
              </Feature>

              <Feature
                title={t("whyChooseUs.features.1.title")}
                icon={<BiDollar />}
              >
                {t("whyChooseUs.features.1.description")}
              </Feature>

              <Feature
                title={t("whyChooseUs.features.2.title")}
                icon={<AiOutlineSchedule />}
              >
                {t("whyChooseUs.features.2.description")}
              </Feature>

              <Feature
                title={t("whyChooseUs.features.3.title")}
                icon={<BsShieldLock />}
              >
                {t("whyChooseUs.features.3.description")}
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default WhyChooseUs;
