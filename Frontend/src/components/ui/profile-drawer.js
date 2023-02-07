import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Box,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import React from "react";

function ProfileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button
        leftIcon={<EditIcon color={"white"} />}
        colorScheme="telegram"
        onClick={onOpen}
      >
        Edit profile
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader borderBottomWidth="1px">
            Modify your profile
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="firstname">Firstname</FormLabel>
                <Input ref={firstField} id="firstname"/>
              </Box>

              <Box>
                <FormLabel htmlFor="lastname">Lastname</FormLabel>
                <Input id="lastname"/>
              </Box>

              <Box>
                <FormLabel htmlFor="username">Phone number</FormLabel>
                <Input id="tel"/>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" px={7}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ProfileDrawer;
