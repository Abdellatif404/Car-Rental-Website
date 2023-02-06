import { useToast } from "@chakra-ui/react";

const ToastMessage = ({message, type = "error", title = "Error occured."}) => {
    const toast = useToast();
  return toast({
    title: title,
    description: message,
    status: type,
    duration: 4000,
    isClosable: true,
  });
};

export default ToastMessage;