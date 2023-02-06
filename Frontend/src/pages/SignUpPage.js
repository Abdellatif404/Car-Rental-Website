import { VStack, Box, Center } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/form/card";
import SubCard from "../components/form/sub-card";
import SignUpForm from "../components/form/signup-form";

function SignUp() {
  return (
    <VStack h="100vh">
      <Box alignSelf="start">
        <Navbar />
      </Box>
      <Center flexGrow={1} p={[4, 4, 0]} mt={[4, 8, 16]}>
        <Card>
          <SubCard
            textHoverColor="text-orange"
            bgColor="bg-secondary"
            route="/login"
            question="Already a user"
            btnText="Log In"
          />
          <SignUpForm />
        </Card>
      </Center>
    </VStack>
  );
}

export default SignUp;
