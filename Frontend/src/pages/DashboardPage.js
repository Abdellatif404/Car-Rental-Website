import {
  Box,
  Container,
  HStack,
  List,
  ListItem,
  TableContainer,
  Thead,
  Table,
  Tr,
  Th,
  Td,
  Tbody,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function Dashboard() {
  return (
    <Container h="100vh" maxW="100vw" p={0}>
      <HStack h={"full"} spacing="0">
        <Box bg={"gray.600"} px="5" py={"40vh"} h={"full"} w={"20%"}>
          <List color={"white"} align="center">
            <ListItem
              transition="all 0.2s"
              borderRadius="md"
              p={2}
              _hover={{ bg: "gray.500" }}
            >
              Users
            </ListItem>
            <ListItem
              transition="all 0.2s"
              borderRadius="md"
              my={4}
              p={2}
              _hover={{ bg: "gray.500" }}
            >
              Cars
            </ListItem>
            <ListItem
              transition="all 0.2s"
              borderRadius="md"
              p={2}
              _hover={{ bg: "gray.500" }}
            >
              Rents
            </ListItem>
          </List>
        </Box>
        <Box h={"full"} w={"full"}>
          <TableContainer p={10}>
            <Heading fontSize={"2xl"} pb="5">
              Hi, Admin
            </Heading>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>brand</Th>
                  <Th>model</Th>
                  <Th>gearbox</Th>
                  <Th>type</Th>
                  <Th>price</Th>
                  <Th>availability</Th>
                  <Th>operations</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>yes</Td>
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
                <Tr>
                  <Td>2</Td>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>yes</Td>
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
                <Tr>
                  <Td>3</Td>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>yes</Td>
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
                <Tr>
                  <Td>4</Td>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>yes</Td>
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
                <Tr>
                  <Td>5</Td>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>yes</Td>
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
                <Tr>
                  <Td>6</Td>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$150</Td>
                  <Td>yes</Td>
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
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </HStack>
    </Container>
  );
}
export default Dashboard;
