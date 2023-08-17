import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const ClientSpeak = () => {
  const { t } = useTranslation();
  return (
    <Box mt={4} p={5}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
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
            {t("clientSpeak.title")}
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
            {t("clientSpeak.description")}
          </chakra.p>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {t("clientSpeak.testimonials.0.heading")}
              </TestimonialHeading>
              <TestimonialText>
                {t("clientSpeak.testimonials.0.text")}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={t("clientSpeak.testimonials.0.name")}
              title={t("clientSpeak.testimonials.0.title")}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {t("clientSpeak.testimonials.1.heading")}
              </TestimonialHeading>
              <TestimonialText>
                {t("clientSpeak.testimonials.1.text")}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={t("clientSpeak.testimonials.1.name")}
              title={t("clientSpeak.testimonials.1.title")}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {t("clientSpeak.testimonials.2.heading")}
              </TestimonialHeading>
              <TestimonialText>
                {t("clientSpeak.testimonials.2.text")}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={t("clientSpeak.testimonials.2.name")}
              title={t("clientSpeak.testimonials.2.title")}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
};

export default ClientSpeak;
