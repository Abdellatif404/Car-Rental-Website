import Card from "../components/form/card";
import SubCard from "../components/form/sub-card";
import SignUpForm from "../components/form/signup-form";
import Navbar from "../components/navbar/Navbar";
import { VStack, Box, Center } from "@chakra-ui/react";

function SignUp() {
  return (
    <>
      <VStack h="100vh">
        <Box alignSelf="start">
          <Navbar />
        </Box>
        <Center flexGrow={1} p={[4, 4, 0]} mt={[4, 8, 16]}>
          <Card>
            <SubCard
              textColor="text-orange"
              bgColor="bg-secondary"
              route="/login"
              question="Already a user"
              btnName="Log In"
            />
            <SignUpForm />
          </Card>
        </Center>
      </VStack>
    </>
  );
}

export default SignUp;
