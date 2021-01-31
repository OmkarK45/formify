import { Box, Text, Badge, Heading, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Box borderRadius="6px" overflow="hidden" bg="gray.100" h="200px">
      <Link to="#">
        <Box height="65%" bg="gray.100">
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height="35%"
          bg="gray.50"
          paddingX="0.8rem"
        >
          <Heading fontSize="xl">Test of Card</Heading>
          <Badge colorScheme="purple">69 Submissions</Badge>
        </Box>
      </Link>
    </Box>
  );
};

export default Card;
