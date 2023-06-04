import {
  Box,
  TableContainer,
  Thead,
  Table,
  Tr,
  Th,
  Td,
  Tbody,
  IconButton,
  Heading,
  Flex,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import AvatarMenu from "../components/navbar/avatar-menu";
import SidebarContent from "../components/dashboard/sidebar-content";
import SearchInput from "../components/search";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuthentication from "../useAuthentication";
import LoadingSpinner from "../components/ui/loading-spinner";
import Navbar from "../components/navbar/Navbar";

function Dashboard() {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([
    "id",
    "brand",
    "model",
    "gearbox",
    "type",
    "price",
    "availability",
  ]);
  const { isLoading } = useAuthentication();
  const sidebar = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleData = (type) => {
    if (type == "Users") {
      axios.get("http://127.0.0.1:8000/api/users").then((response) => {
        setHeader(["id", "firstname", "lastname", "telephone", "email"]);
        setData(response.data.data);
      });
    } else if (type == "Cars") {
      axios.get("http://127.0.0.1:8000/api/cars").then((response) => {
        setHeader([
          "id",
          "brand",
          "model",
          "gearbox",
          "fuel_type",
          "price",
          "available",
        ]);
        setData(response.data.data);
      });
    } else if (type == "Rents") {
      axios.get("http://127.0.0.1:8000/api/cars").then((response) => {
        setHeader([
          "id",
          "rental_date",
          "return_date",
          "price",
          "user_id",
          "car_id",
        ]);
        setData(response.data.data);
      });
    }
  };

  return (
    <>
      <Navbar
        sidebarContent={<SidebarContent handleData={handleData} />}
        buttons={
          <>
            <SearchInput />
            <AvatarMenu />
          </>
        }
      />
      <Box
        as="section"
        bg="gray.50"
        _dark={{
          bg: "red.700",
        }}
        minH="100vh"
      >
        <Box
          ml={{
            base: 0,
            md: 60,
          }}
          transition=".3s ease"
        >
          <Box as="main" p={4}>
            <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="auto">
              <Box h={"full"} w={"full"}>
                <TableContainer p={10}>
                  <Heading fontSize={"2xl"} pb="5">
                    Hi, Admin
                  </Heading>
                  <Table variant="striped">
                    <Thead>
                      <Tr>
                        {header.map((title) => (
                          <Th key={title}>{title}</Th>
                        ))}
                        <Th>operations</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data.map((item) => (
                        <Tr key={item.id}>
                          {header.map((column) => {
                            if (column == "available")
                              return (
                                <Td key={column}>
                                  {item[column] == 0 ? "yes" : "no"}
                                </Td>
                              );
                            else return <Td key={column}>{item[column]}</Td>;
                          })}
                          <Td>
                            <IconButton
                              bg={""}
                              _hover={{ bg: "blue.400", color: "white" }}
                              mr={1}
                              aria-label="Edit"
                              icon={<EditIcon />}
                            />
                            <IconButton
                              bg={""}
                              _hover={{ bg: "red", color: "white" }}
                              ml={1}
                              aria-label="Delete"
                              icon={<DeleteIcon />}
                            />
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {isOpen && (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent
              handleData={handleData}
              w="full"
              borderRight="none"
            />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
export default Dashboard;
