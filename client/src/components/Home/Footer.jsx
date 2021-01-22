import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <Box padding="2rem 0">
      <Flex justifyContent="center">
        <Link color="body.text">GitHub</Link>
        <Link color="body.text" margin="0 3rem">
          LinkedIn
        </Link>
        <Link color="body.text">Instagram</Link>
      </Flex>
    </Box>
  );
};

export default Footer;
