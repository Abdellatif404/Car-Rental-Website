export const showToast = (
  toast,
  message,
  type = "error",
  title = "Error"
) => {
  return toast({
    title: title,
    description: message,
    status: type,
    duration: 4000,
    isClosable: true,
  });
};
