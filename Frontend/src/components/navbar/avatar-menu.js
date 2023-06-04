import {
  Box,
  IconButton,
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
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
              <MenuItem onClick={() => navigate("/dashboard")}>
                Dashboard
              </MenuItem>
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
