import { Box, Text, IconButton } from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
const AddNewCard = () => {
  return (
    <Box
      border="5px dotted #eee"
      position="relative"
      borderRadius="6px"
      bg="gray.100"
      padding="0"
      h="200px"
    >
      <Link to="#">
        <Box>Add New Form</Box>
      </Link>
    </Box>
  );
};

export default AddNewCard;
