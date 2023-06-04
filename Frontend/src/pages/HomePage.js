import { Container, Flex, VStack } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import NavbarLoginButtons from "../components/navbar/login-buttons";
import HomePageText from "../components/ui/home-page-text";
import HomePageButton from "../components/ui/home-page-button";
import HomePageImage from "../components/ui/home-page-image";
import Footer from "../components/footer";
import ClientSpeak from "../components/client-speak";
import AvatarMenu from "../components/navbar/avatar-menu";
import useAuthentication from "../useAuthentication";
import WhyChooseUs from "../components/why-choose-us";
import FeaturedVehicles from "../components/featured-vehicles";
import HomeSidebarContent from "../components/home-sidebar-content";
import SidebarContent from "../components/dashboard/sidebar-content";
import NavbarLinks from "../components/navbar/NavbarLinks";

function Home() {
  const { isLoggedIn, isLoading } = useAuthentication();
  return (
    <>
      <Navbar
        sidebarContent={<HomeSidebarContent />}
        links={<NavbarLinks />}
        buttons={isLoggedIn ? <AvatarMenu /> : <NavbarLoginButtons />}
      />
      <Container overflow="hidden" maxWidth="1720px" px={[12, 8, 8]}>
        <Flex h="100vh" rowGap={4} direction={"row"}>
          <VStack
            alignItems="start"
            justifyContent="center"
            spacing={7}
            px={[0, 12, 4, 8]}
            h="full"
          >
            <HomePageText />
            <HomePageButton />
          </VStack>
          <HomePageImage />
        </Flex>
      </Container>
      <FeaturedVehicles />
      <WhyChooseUs />
      <ClientSpeak />
      <Footer />
    </>
  );
}

export default Home;
