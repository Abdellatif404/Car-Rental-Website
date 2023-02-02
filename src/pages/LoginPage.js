import Card from "../components/form/card";
import SubCard from "../components/form/sub-card";
import LoginForm from "../components/form/login-form";
import Navbar from "../components/navbar/Navbar";
import { Center, Box, VStack } from "@chakra-ui/react";

function Login() {
  return (
    <VStack h="100vh">
      <Box alignSelf="start">
        <Navbar />
      </Box>
      <Center flexGrow={1} p={[4, 4, 0]} mt={[4, 8, 16]}>
        <Card>
          <SubCard
            textHoverColor="text-blue"
            bgColor="bg-primary"
            route="/signup"
            question="Don't have an account"
            btnText="Sign Up"
          />
          <LoginForm />
        </Card>
      </Center>
    </VStack>
  );
}

export default Login;
