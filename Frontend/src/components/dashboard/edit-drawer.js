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
import { useRef, useState } from "react";

function EditItemDrawer({ dataType, item, onUpdate }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  const [formData, setFormData] = useState({ ...item });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    onUpdate(formData);
    onClose();
  };

  const renderInputFields = () => {
    if (dataType === "cars") {
      return (
        <>
          <Box>
            <FormLabel htmlFor="brand">Brand</FormLabel>
            <Input
              ref={firstField}
              id="brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="model">Model</FormLabel>
            <Input id="model" value={formData.model} onChange={handleChange} />
          </Box>

          <Box>
            <FormLabel htmlFor="gearbox">Gearbox</FormLabel>
            <Input
              id="gearbox"
              value={formData.gearbox}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="fuel_type">Fuel Type</FormLabel>
            <Input
              id="fuel_type"
              value={formData.fuel_type}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="price">Price</FormLabel>
            <Input id="price" value={formData.price} onChange={handleChange} />
          </Box>

          <Box>
            <FormLabel htmlFor="available">Availability</FormLabel>
            <Input
              id="available"
              value={formData.available}
              onChange={handleChange}
            />
          </Box>
        </>
      );
    } else if (dataType === "users") {
      return (
        <>
          <Box>
            <FormLabel htmlFor="firstname">Firstname</FormLabel>
            <Input
              ref={firstField}
              id="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="lastname">Lastname</FormLabel>
            <Input
              id="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="telephone">Telephone</FormLabel>
            <Input
              id="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" value={formData.email} onChange={handleChange} />
          </Box>
        </>
      );
    } else if (dataType === "rents") {
      return (
        <>
          <Box>
            <FormLabel htmlFor="rental_date">Rental Date</FormLabel>
            <Input
              ref={firstField}
              id="rental_date"
              value={formData.rental_date}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="return_date">Return Date</FormLabel>
            <Input
              id="return_date"
              value={formData.return_date}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="price">Price</FormLabel>
            <Input id="price" value={formData.price} onChange={handleChange} />
          </Box>

          <Box>
            <FormLabel htmlFor="user_id">Customer ID</FormLabel>
            <Input
              id="user_id"
              value={formData.user_id}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="car_id">Car ID</FormLabel>
            <Input
              id="car_id"
              value={formData.car_id}
              onChange={handleChange}
            />
          </Box>
        </>
      );
    }

    return null;
  };

  return (
    <>
      <Button
        leftIcon={<EditIcon color={"white"} />}
        colorScheme="green"
        _hover={{ bg: "green", color: "white" }}
        onClick={onOpen}
      >
        Edit
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

          <DrawerHeader borderBottomWidth="1px">Edit {dataType}</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">{renderInputFields()}</Stack>
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

export default EditItemDrawer;