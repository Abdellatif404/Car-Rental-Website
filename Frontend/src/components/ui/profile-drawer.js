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
import React, { useEffect, useState } from "react";
import axios from "axios";

function ProfileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const user_id = localStorage.getItem("id");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    telephone: "",
  });

  useEffect(() => {
    setFormData({
      firstname: localStorage.getItem("firstname"),
      lastname: localStorage.getItem("lastname"),
      telephone: localStorage.getItem("telephone"),
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .put(`http://127.0.0.1:8000/api/user/${user_id}`, formData)
      .then((response) => {
        console.log(response.data);
        const updatedUser = response.data.data;
        localStorage.setItem("firstname", updatedUser.firstname);
        localStorage.setItem("lastname", updatedUser.lastname);
        localStorage.setItem("telephone", updatedUser.telephone);
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                <Input
                  ref={firstField}
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="lastname">Lastname</FormLabel>
                <Input
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="telephone">Phone number</FormLabel>
                <Input
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" px={7} onClick={handleSubmit}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ProfileDrawer;
