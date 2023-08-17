import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  DrawerOverlay,
} from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { RiFileTextLine } from "react-icons/ri";
import { AiOutlineDashboard, AiOutlineInfoCircle } from "react-icons/ai";
import { BiCar } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const NavItem = ({ icon, children, link, ...rest }) => {
  return (
    <Link
      as={RouterLink}
      to={link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "blue.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const HomeSidebarContent = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  const homeTranslation = t("linkItems.home");
  const bookCarsTranslation = t("linkItems.bookCars");
  const dashboardTranslation = t("linkItems.dashboard");
  const aboutUsTranslation = t("linkItems.aboutUs");
  const termsOfServiceTranslation = t("linkItems.termsOfService");

  const LinkItems = [
    { name: homeTranslation, icon: FiHome, link: "/home" },
    { name: bookCarsTranslation, icon: BiCar, link: "/cars" },
    ...(email === "admin@gmail.com"
      ? [
          {
            name: dashboardTranslation,
            icon: AiOutlineDashboard,
            link: "/dashboard",
          },
        ]
      : []),
    { name: aboutUsTranslation, icon: AiOutlineInfoCircle, link: "/#" },
    { name: termsOfServiceTranslation, icon: RiFileTextLine, link: "/#" },
  ];
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent bg={"transparent"}>
          <Box minH="100vh">
            <Box
              bg={useColorModeValue("white", "gray.900")}
              borderRight="1px"
              borderRightColor={useColorModeValue("gray.200", "gray.700")}
              w={{ base: "full", md: 60 }}
              pos="fixed"
              h="full"
            >
              <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
              >
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                  LOCAVO
                </Text>
                <CloseButton
                  display={{ base: "flex", md: "none" }}
                  onClick={onClose}
                />
              </Flex>
              {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} link={link.link}>
                  {link.name}
                </NavItem>
              ))}
            </Box>
          </Box>
        </DrawerContent>
      </Drawer>
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Menu"
        display={{
          base: "inline-flex",
          md: "none",
        }}
        onClick={onOpen}
        size="sm"
      />
    </>
  );
};

export default HomeSidebarContent;
