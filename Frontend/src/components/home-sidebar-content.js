import React, { ReactNode } from "react";
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
  BoxProps,
  FlexProps,
  DrawerOverlay,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaServicestack } from "react-icons/fa";
import { RiCustomerService2Fill, RiDashboard2Fill } from "react-icons/ri";
import { AiFillDashboard, AiOutlineDashboard } from "react-icons/ai";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Explore", icon: FiCompass },
  { name: "Dashboard", icon: AiOutlineDashboard },
  { name: "About Us", icon: FiStar },
  { name: "Terms of Service", icon: RiCustomerService2Fill },
];

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
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
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                <NavItem key={link.name} icon={link.icon}>
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

/*
import { Box, Flex, Text } from "@chakra-ui/react";
import NavItem from "./nav-item";
import { FaUserFriends } from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";
import { RiCarLine } from "react-icons/ri";

const HomeSidebarContent = ({ handleData, ...props }) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="blue.700"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
          LOCAVO
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={FaUserFriends} onClick={() => handleData("Users")}>
          Users
        </NavItem>
        <NavItem icon={RiCarLine} onClick={() => handleData("Cars")}>
          Cars
        </NavItem>
        <NavItem icon={GiCarKey} onClick={() => handleData("Rents")}>
          Rents
        </NavItem>
      </Flex>
    </Box>
  );
};

export default HomeSidebarContent;
*/
