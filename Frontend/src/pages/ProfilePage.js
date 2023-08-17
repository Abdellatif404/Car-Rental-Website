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
  Text,
} from "@chakra-ui/react";
import ProfileDrawer from "../components/ui/profile-drawer";
import HomeSidebarContent from "../components/home/home-sidebar-content";
import NavbarLinks from "../components/navbar/NavbarLinks";
import AvatarMenu from "../components/navbar/avatar-menu";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();
  const user_id = localStorage.getItem("id");
  const [rents, setRents] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/users/${user_id}/rents`)
      .then((response) => {
        setRents(response.data.data);
      });
  }, []);

  return (
    <>
      <Navbar
        sidebarContent={<HomeSidebarContent />}
        links={<NavbarLinks />}
        buttons={<AvatarMenu />}
      />
      <Container h="100vh" maxW="100vw" py={20}>
        <VStack>
          <Box w={"90%"}>
            <HStack>
              <Heading size={["lg", "xl"]}>{t("profile.heading")}</Heading>
              <Spacer />
              <ProfileDrawer />
            </HStack>
            <Divider my={5} />

            <TableContainer>
              <Table variant="striped" size={["md", "md", "lg"]}>
                <Thead>
                  <Tr>
                    <Th>{t("profile.brand")}</Th>
                    <Th>{t("profile.model")}</Th>
                    <Th>{t("profile.type")}</Th>
                    <Th>{t("profile.price")}</Th>
                    <Th>{t("profile.gearbox")}</Th>
                    <Th>{t("profile.rentalDate")}</Th>
                    <Th>{t("profile.returnDate")}</Th>
                  </Tr>
                </Thead>
                {rents.length === 0 ? (
                  <Tbody>
                    <Tr>
                      <Td colSpan={7}>
                        <Text textAlign="center">{t("profile.noData")}</Text>
                      </Td>
                    </Tr>
                  </Tbody>
                ) : (
                  <Tbody>
                    {rents.map((rent) => (
                      <Tr key={rent.id}>
                        <Td>{rent.car.brand}</Td>
                        <Td>{rent.car.model}</Td>
                        <Td>{rent.car.fuel_type}</Td>
                        <Td>{rent.car.price}</Td>
                        <Td>{rent.car.gearbox}</Td>
                        <Td>{rent.rental_date}</Td>
                        <Td>{rent.return_date}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                )}
              </Table>
            </TableContainer>
          </Box>
        </VStack>
      </Container>
    </>
  );
}

export default Profile;
