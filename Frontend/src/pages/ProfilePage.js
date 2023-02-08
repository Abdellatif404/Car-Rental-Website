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
  Heading,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import ProfileDrawer from "../components/ui/profile-drawer";

function Profile() {
  return (
    <Container h="100vh" maxW="100vw" py={20}>
      <VStack>
        <Box w={"90%"}>
          <HStack>
            <Heading size={["lg", "xl"]}>List of all your rentals</Heading>
            <Spacer />
            <ProfileDrawer />
          </HStack>
          <Divider my={5} />
          <TableContainer>
            <Table variant="striped" size={["md", "md", "lg"]}>
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
        </Box>
      </VStack>
    </Container>
  );
}

export default Profile;
