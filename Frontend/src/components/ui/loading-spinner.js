import { Center, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Center>
      <Spinner
        borderTop={5}
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      Loading...
    </Center>
  );
};

export default LoadingSpinner;
