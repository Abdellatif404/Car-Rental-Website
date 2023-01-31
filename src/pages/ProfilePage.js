import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  HStack,
  TableContainer,
  Thead,
  Table,
  Tr,
  Th,
  Td,
  Tbody,
  VStack,
  FormLabel,
  Input,
  Text,
  Button,
  Spacer,
  Heading,
  Center,
} from "@chakra-ui/react";

function Profile() {
  return (
    <Container h="100vh" maxW="100vw" p={0}>
      <HStack h={"full"} spacing="0">
        <Box bg={"gray.50"} px="10" py={"25vh"} h={"full"} w={"30%"}>
          <VStack alignItems={"start"} spacing={"3"}>
            <Heading fontWeight={"400"}>Your Profile</Heading>
            <FormLabel>Prenom</FormLabel>
            <Input type={"text"} />
            <FormLabel>Nom</FormLabel>
            <Input type={"text"} />
            <FormLabel>Email</FormLabel>
            <Input type={"email"} />

            <Button colorScheme={"green"} w={"full"}>
              Save
            </Button>
          </VStack>
        </Box>
        <Box h={"full"} w={"full"}>
          <Center h={"full"}>
          <TableContainer>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>brand</Th>
                  <Th>model</Th>
                  <Th>gearbox</Th>
                  <Th>type</Th>
                  <Th>price</Th>
                  <Th>rental date</Th>
                  <Th>return date</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>01/31/2023</Td>
                  <Td>02/05/2023</Td>
                </Tr>
                <Tr>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>01/31/2023</Td>
                  <Td>02/05/2023</Td>
                </Tr>
                <Tr>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>01/31/2023</Td>
                  <Td>02/05/2023</Td>
                </Tr>
                <Tr>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>01/31/2023</Td>
                  <Td>02/05/2023</Td>
                </Tr>
                <Tr>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>01/31/2023</Td>
                  <Td>02/05/2023</Td>
                </Tr>
                <Tr>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$150</Td>
                  <Td>01/31/2023</Td>
                  <Td>02/05/2023</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          </Center>
        </Box>
      </HStack>
    </Container>
  );
}

export default Profile;
