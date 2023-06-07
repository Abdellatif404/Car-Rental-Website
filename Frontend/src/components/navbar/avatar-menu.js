import {
  Box,
  Text,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AvatarMenu = () => {
  const fullname =
    localStorage.getItem("firstname") + " " + localStorage.getItem("lastname");
  const email = localStorage.getItem("email");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };

  const handleLogout = (e) => {
    e.preventDefault();

    axios
      .get("http://127.0.0.1:8000/api/logout")
      .then((response) => {
        localStorage.clear();
        //setIsLoggedIn(false);
        navigate("/login");
      })
      .catch((e) => {
        // ...
      });
  };

  return (
    <Box px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                }
              />
            </MenuButton>
            <MenuList>
              <Box mt={4} textAlign="center">
                <Text fontWeight="bold">{fullname}</Text>
                <Text fontSize="sm" color={"gray"}>
                  {email}
                </Text>
              </Box>
              <MenuDivider />
              <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
              <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AvatarMenu;
