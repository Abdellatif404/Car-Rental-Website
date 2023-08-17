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
  useToast,
  Button,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import AvatarMenu from "../components/navbar/avatar-menu";
import SidebarContent from "../components/dashboard/sidebar-content";
import SearchInput from "../components/search";
import axios from "axios";
import { useContext, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import EditItemDrawer from "../components/dashboard/edit-drawer";
import { showToast } from "../components/toast-alert";
import CreateItemDrawer from "../components/dashboard/create-drawer";
import SearchContext from "../SearchContext";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { t } = useTranslation();
  const toast = useToast();
  const { searchResults, setSearchResults } = useContext(SearchContext);
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
  const [type, setType] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleData = (type) => {
    if (type == "Users") {
      axios.get("http://127.0.0.1:8000/api/users").then((response) => {
        setHeader(["id", "firstname", "lastname", "telephone", "email"]);
        setData(response.data.data);
        setType("users");
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
        setType("cars");
      });
    } else if (type == "Rents") {
      axios.get("http://127.0.0.1:8000/api/rents").then((response) => {
        setHeader([
          "id",
          "rental_date",
          "return_date",
          "price",
          "user_id",
          "car_id",
        ]);
        setData(response.data.data);
        setType("rents");
      });
    }
  };

  const handleUpdateItem = (itemId, updatedItem) => {
    const endpoint = `http://127.0.0.1:8000/api/${type}/${itemId}`;

    axios
      .put(endpoint, updatedItem)
      .then((response) => {
        showToast(toast, `${type} updated successfully!`, "success", "Success");
        const updatedData = response.data.data;

        setData((prevData) =>
          prevData.map((item) => {
            if (item.id === itemId) {
              return updatedData;
            }
            return item;
          })
        );
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    const endpoint = `http://127.0.0.1:8000/api/${type}/${id}`;

    axios
      .delete(endpoint)
      .then((response) => {
        showToast(toast, `${type} deleted successfully!`, "success", "Success");
        setData((prevData) => prevData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar
        sidebarContent={<SidebarContent handleData={handleData} />}
        buttons={
          <>
            <SearchInput type={type.toLowerCase()} />
            <AvatarMenu />
          </>
        }
      />
      <Box as="section" minH="100vh">
        <Box
          ml={{
            base: 0,
            md: 60,
          }}
          transition=".3s ease"
        >
          <Box as="main" p={4}>
            <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="auto">
              <Box h={"full"} w={"full"} overflowX="auto">
                <TableContainer p={10}>
                  <Flex align="center" justify="space-between" pb={5}>
                    <Heading fontSize={{ base: "xl", md: "2xl" }} pb="5">
                    {t("header.greeting")}
                    </Heading>
                    {type === "cars" && <CreateItemDrawer dataType={type} />}
                  </Flex>
                  <Table variant="striped" size={{ base: "sm", md: "md" }}>
                    <Thead>
                      <Tr>
                        {header.map((title) => (
                          <Th key={title}>{title}</Th>
                        ))}
                        <Th>operations</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {searchResults && searchResults.length > 0
                        ? searchResults.map((item) => (
                            <Tr key={item.id}>
                              {header.map((column) => {
                                if (column == "available")
                                  return (
                                    <Td key={item.id}>
                                      {item[column] == 0 ? "yes" : "no"}
                                    </Td>
                                  );
                                else
                                  return <Td key={column}>{item[column]}</Td>;
                              })}
                              <Td>
                                <EditItemDrawer
                                  dataType={type}
                                  item={item}
                                  onUpdate={(updatedItem) =>
                                    handleUpdateItem(item.id, updatedItem)
                                  }
                                />
                                <IconButton
                                  onClick={() => handleDelete(item.id)}
                                  bg={""}
                                  _hover={{ bg: "red.500", color: "white" }}
                                  ml={1}
                                  aria-label="Delete"
                                  icon={<DeleteIcon />}
                                />
                              </Td>
                            </Tr>
                          ))
                        : data.map((item) => (
                            <Tr key={item.id}>
                              {header.map((column) => {
                                if (column == "available")
                                  return (
                                    <Td key={item.id}>
                                      {item[column] == 0 ? "yes" : "no"}
                                    </Td>
                                  );
                                else
                                  return <Td key={column}>{item[column]}</Td>;
                              })}
                              <Td>
                                <EditItemDrawer
                                  dataType={type}
                                  item={item}
                                  onUpdate={(updatedItem) =>
                                    handleUpdateItem(item.id, updatedItem)
                                  }
                                />
                                <IconButton
                                  onClick={() => handleDelete(item.id)}
                                  bg={""}
                                  _hover={{ bg: "red.500", color: "white" }}
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
